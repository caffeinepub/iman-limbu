import Array "mo:core/Array";
import Text "mo:core/Text";
import List "mo:core/List";
import Map "mo:core/Map";
import Principal "mo:core/Principal";
import Runtime "mo:core/Runtime";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

actor {
  // Initialize the access control state
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  // User profile type
  public type UserProfile = {
    name : Text;
  };

  let userProfiles = Map.empty<Principal, UserProfile>();

  // Persistent state for chat histories
  type Message = {
    content : Text;
    isSystemMessage : Bool;
  };

  type ChatHistory = List.List<Message>;

  let chatHistories = Map.empty<Principal, ChatHistory>();

  // User profile management functions
  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can view profiles");
    };
    userProfiles.get(caller);
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (caller.notEqual(user) and not AccessControl.isAdmin(accessControlState, caller)) {
      Runtime.trap("Unauthorized: Can only view your own profile");
    };
    userProfiles.get(user);
  };

  public shared ({ caller }) func saveCallerUserProfile(profile : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    userProfiles.add(caller, profile);
  };

  // Append a message to the caller's chat history and generate a system response
  public shared ({ caller }) func appendMessage(message : Text) : async [Message] {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only authenticated users can send messages");
    };

    if (Text.equal(message, "")) {
      Runtime.trap("Cannot send an empty message");
    };

    let history = switch (chatHistories.get(caller)) {
      case (null) { List.empty<Message>() };
      case (?existingHistory) { existingHistory };
    };

    history.add({
      content = message;
      isSystemMessage = false;
    });

    // Generate system response (simple for now)
    let systemResponse = {
      content = "System: Received your message!";
      isSystemMessage = true;
    };

    history.add(systemResponse);

    // Update chat history
    chatHistories.add(caller, history);

    history.toArray();
  };

  // Get current conversation for the caller or specified user (admin only for other users)
  public query ({ caller }) func getConversation(user : ?Principal) : async [Message] {
    let targetUser = switch (user) {
      case (null) { caller };
      case (?u) {
        if (caller.notEqual(u) and not AccessControl.isAdmin(accessControlState, caller)) {
          Runtime.trap("Unauthorized: Can only view your own conversation");
        };
        u;
      };
    };

    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only authenticated users can view conversations");
    };

    switch (chatHistories.get(targetUser)) {
      case (null) { [] };
      case (?history) { history.toArray() };
    };
  };

  // Clear conversation history for the caller or specified user (admin only for other users)
  public shared ({ caller }) func clearConversation(user : ?Principal) : async () {
    let targetUser = switch (user) {
      case (null) { caller };
      case (?u) {
        if (caller.notEqual(u) and not AccessControl.isAdmin(accessControlState, caller)) {
          Runtime.trap("Unauthorized: Can only clear your own conversation");
        };
        u;
      };
    };

    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only authenticated users can clear conversations");
    };

    if (chatHistories.containsKey(targetUser)) {
      chatHistories.remove(targetUser);
    } else {
      Runtime.trap("No conversation found for this user");
    };
  };
};
