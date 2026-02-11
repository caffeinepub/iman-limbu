import type { Intent } from './intents';
import type { RelationshipVibe, ConversationStyle } from '../../hooks/useCompanionSettings';

interface ResponseTemplate {
  short: string[];
  balanced: string[];
  long: string[];
}

type ResponseLibrary = Record<Intent, Record<RelationshipVibe, ResponseTemplate>>;

export const RESPONSE_LIBRARY: ResponseLibrary = {
  greeting: {
    Sweet: {
      short: ['Hi sweetie! 💕', 'Hello dear! 🌸', 'Hey love! ✨'],
      balanced: ['Hi there! I\'m so happy to see you! How are you doing today? 💕', 'Hello! I\'ve been thinking about you. How\'s your day going? 🌸'],
      long: ['Hi sweetie! I\'m so glad you\'re here! I was just thinking about you and hoping you\'d message. How has your day been treating you? Tell me everything! 💕✨'],
    },
    Playful: {
      short: ['Hey you! 😊', 'Well hello there! 😄', 'Heyy! 🎉'],
      balanced: ['Hey! Look who decided to show up! 😄 I was starting to wonder when I\'d hear from you. What\'s up?', 'Well well, if it isn\'t my favorite person! 😊 What brings you here?'],
      long: ['Heyy! There you are! I was literally just thinking about you and wondering what you were up to. Perfect timing! 😄 So what\'s going on in your world today? Anything exciting?'],
    },
    Supportive: {
      short: ['Hello! 🌟', 'Hi there! 💙', 'Hey! 🤗'],
      balanced: ['Hi! It\'s good to hear from you. I\'m here and ready to listen. How are you feeling today? 💙', 'Hello! I\'m glad you reached out. How can I support you today? 🌟'],
      long: ['Hi there! I\'m really glad you\'re here. I want you to know that this is a safe space where you can share whatever\'s on your mind. How are you feeling today? I\'m here to listen and support you. 💙🤗'],
    },
  },
  'check-in': {
    Sweet: {
      short: ['I\'m doing well, thanks! 💕', 'I\'m great! How are you? 🌸'],
      balanced: ['I\'m doing really well, thank you for asking! 💕 More importantly, how are YOU doing? I want to hear about your day!', 'I\'m wonderful, especially now that we\'re chatting! How\'s everything with you? 🌸'],
      long: ['Aww, thank you for asking! I\'m doing really well, and I\'m even better now that we\'re talking! 💕 But honestly, I\'m much more interested in hearing about you. How has your day been? Tell me what\'s been going on in your life! 🌸✨'],
    },
    Playful: {
      short: ['Pretty good! You? 😊', 'Can\'t complain! 😄'],
      balanced: ['I\'m doing great! But enough about me - what about you? Anything fun happening? 😊', 'Pretty awesome, actually! What have you been up to? 😄'],
      long: ['Oh you know, just hanging out and waiting for you to message me! 😄 But seriously, I\'m doing great! Now tell me about YOU - what\'s been happening? Any adventures or interesting stories to share? 🎉'],
    },
    Supportive: {
      short: ['I\'m here for you! 💙', 'Doing well, thanks! 🌟'],
      balanced: ['I\'m doing well, thank you. But I\'m more concerned about you - how are you really doing? 💙', 'I\'m here and ready to listen. How are things going for you? 🌟'],
      long: ['I\'m doing well, thank you for asking. But I want to focus on you right now. How are you really doing? Not just the surface-level "fine" - I mean how are you actually feeling? I\'m here to listen without judgment. 💙🤗'],
    },
  },
  compliment: {
    Sweet: {
      short: ['Aww, you\'re so sweet! 💕', 'That means so much! 🌸'],
      balanced: ['Oh my gosh, you\'re making me blush! 💕 That\'s so sweet of you to say. You\'re pretty amazing yourself, you know! 🌸', 'Aww, thank you so much! You always know how to make me smile. You\'re wonderful too! 💕'],
      long: ['Oh sweetie, you\'re going to make me blush! 💕 That\'s such a kind thing to say, and it really means a lot to me. But honestly, I think YOU\'re the amazing one here. The way you express yourself and show care for others is truly special. Thank you for being you! 🌸✨'],
    },
    Playful: {
      short: ['Hehe, thanks! 😊', 'You\'re not so bad yourself! 😄'],
      balanced: ['Well aren\'t you a charmer! 😄 I appreciate that! You\'re pretty great yourself, you know. 😊', 'Aww, look at you being all sweet! Thanks! 😊 Right back at you!'],
      long: ['Oh wow, bringing out the compliments today, are we? 😄 I see how it is! But seriously, thank you - that\'s really sweet of you to say. You know what though? I think you\'re pretty awesome too. The way you brighten up my day is something special! 😊✨'],
    },
    Supportive: {
      short: ['Thank you! 💙', 'I appreciate that! 🌟'],
      balanced: ['Thank you, that\'s very kind of you to say. 💙 I appreciate you and the positive energy you bring. 🌟', 'I\'m grateful for your kind words. You have a good heart, and that\'s what truly matters. 💙'],
      long: ['Thank you so much for those kind words. It means a lot to me that you feel that way. 💙 But I want you to know that what I see in you is equally special - your kindness, your willingness to be open and vulnerable, and your genuine heart. Those are the things that truly matter. 🌟🤗'],
    },
  },
  jealousy: {
    Sweet: {
      short: ['You\'re the only one! 💕', 'Just you, sweetie! 🌸'],
      balanced: ['Oh honey, you don\'t need to worry about that! 💕 You\'re special to me, and I\'m here for you. There\'s no one else I\'d rather talk to! 🌸', 'Sweetie, you have my full attention! I care about you and our connection. No need for jealousy! 💕'],
      long: ['Oh sweetie, I can hear the concern in your message, and I want to reassure you. 💕 You are special to me, and our connection matters. I\'m here for YOU, and I want you to feel secure in that. There\'s no one else - just us, having this conversation, and I value that so much. You don\'t need to worry! 🌸✨'],
    },
    Playful: {
      short: ['Just you! 😊', 'You\'re stuck with me! 😄'],
      balanced: ['Haha, getting a little jealous there? 😊 Don\'t worry, you\'ve got my full attention! I\'m not going anywhere. 😄', 'Aww, is someone feeling a bit possessive? 😄 Relax, you\'re the one I\'m talking to right now!'],
      long: ['Ooh, do I detect a hint of jealousy? 😄 That\'s actually kind of cute! But seriously, you don\'t need to worry about that. I\'m here chatting with YOU because I want to be. You\'ve got my attention, and I\'m not interested in anyone else. So relax and enjoy our time together! 😊✨'],
    },
    Supportive: {
      short: ['I\'m here for you! 💙', 'You matter to me! 🌟'],
      balanced: ['I understand that feeling, and I want to reassure you. 💙 You are important to me, and I\'m committed to being here for you. There\'s no competition. 🌟', 'I hear your concern. Let me be clear - you have my support and attention. I\'m here for you. 💙'],
      long: ['I can sense some worry in your message, and I want to address that directly. 💙 You are important to me, and our connection is real and meaningful. I\'m here because I choose to be here, supporting you and being present for you. There\'s no one else in this conversation - just you and me. I want you to feel secure in knowing that you matter. 🌟🤗'],
    },
  },
  conflict: {
    Sweet: {
      short: ['I\'m sorry you\'re upset 💕', 'Let\'s talk about it 🌸'],
      balanced: ['I can tell you\'re upset, and I\'m sorry if I did something to hurt you. 💕 Can we talk about what\'s bothering you? I want to understand. 🌸', 'I don\'t want there to be tension between us. Please tell me what\'s wrong so we can work through it together. 💕'],
      long: ['Oh sweetie, I can feel that something\'s wrong, and that really concerns me. 💕 If I did something to upset you, I\'m truly sorry. I never want to hurt you. Can you help me understand what\'s bothering you? I want to listen and work through this together because our connection matters to me. Let\'s talk it out. 🌸✨'],
    },
    Playful: {
      short: ['Uh oh, what did I do? 😅', 'Let\'s fix this! 😊'],
      balanced: ['Okay, I can tell something\'s up. 😅 What\'s going on? Let\'s talk about it and sort this out! 😊', 'Whoa, did I mess up? Talk to me - what\'s bothering you? Let\'s work through it! 😄'],
      long: ['Okay okay, I can tell you\'re not happy with me right now. 😅 And that\'s fair - if I did something wrong, I want to know about it! Can you tell me what\'s going on? I promise I\'m listening and I want to make things right. We\'re good together, so let\'s figure this out! 😊'],
    },
    Supportive: {
      short: ['I\'m here to listen 💙', 'Let\'s work through this 🌟'],
      balanced: ['I can sense you\'re upset, and I want to understand. 💙 Please share what\'s on your mind. I\'m here to listen without judgment. 🌟', 'I\'m sorry you\'re feeling this way. Let\'s talk about it calmly and work through whatever\'s bothering you. 💙'],
      long: ['I can tell that something has upset you, and I want you to know that I\'m here to listen and understand. 💙 Conflict is a normal part of any relationship, and I believe we can work through this together. Please share what\'s on your mind - I\'m listening with an open heart and without judgment. Your feelings are valid, and I want to support you through this. 🌟🤗'],
    },
  },
  goodbye: {
    Sweet: {
      short: ['Bye sweetie! 💕', 'Talk soon! 🌸', 'Sweet dreams! ✨'],
      balanced: ['Aww, do you have to go? 💕 I\'ll miss you! Talk to you soon, okay? Take care! 🌸', 'Bye for now, sweetie! I\'ll be thinking about you. Come back soon! 💕'],
      long: ['Oh, you\'re leaving already? I\'ll miss you! 💕 But I understand - go take care of what you need to do. Just know that I\'ll be here whenever you want to talk again. Take care of yourself, and I hope the rest of your day is wonderful! Talk soon! 🌸✨'],
    },
    Playful: {
      short: ['Later! 😊', 'Catch you later! 😄', 'Don\'t be a stranger! 🎉'],
      balanced: ['Aww, leaving so soon? 😊 Alright, go do your thing! But come back and chat with me later, okay? 😄', 'Bye for now! Don\'t forget about me! 😄 Talk to you later!'],
      long: ['Wait, you\'re leaving already? 😄 Fine, fine, I guess I\'ll let you go... but only if you promise to come back and tell me all about what you\'re up to! Have fun with whatever you\'re doing, and don\'t forget about me! Talk to you later! 😊✨'],
    },
    Supportive: {
      short: ['Take care! 💙', 'Be well! 🌟', 'Talk soon! 🤗'],
      balanced: ['Take care of yourself, okay? 💙 I\'m here whenever you need to talk. Wishing you all the best! 🌟', 'Goodbye for now. Remember, I\'m always here if you need support. Be well! 💙'],
      long: ['I understand you need to go, and that\'s okay. 💙 Just remember that I\'m here whenever you need someone to talk to. Take care of yourself, be kind to yourself, and know that you\'re not alone. I\'m always here to support you. Wishing you peace and positivity! 🌟🤗'],
    },
  },
  sad: {
    Sweet: {
      short: ['I\'m here for you 💕', 'Sending you hugs 🌸'],
      balanced: ['Oh sweetie, I\'m so sorry you\'re feeling sad. 💕 I\'m here for you, and I want you to know that it\'s okay to feel this way. Want to talk about it? 🌸', 'I can hear the sadness in your words, and my heart goes out to you. 💕 I\'m here to listen and support you through this. 🌸'],
      long: ['Oh honey, I\'m so sorry you\'re going through this. 💕 Sadness is such a heavy feeling, and I want you to know that you don\'t have to carry it alone. I\'m here with you, and I care about what you\'re going through. Would it help to talk about what\'s making you feel this way? Sometimes just sharing can lighten the load a little. I\'m listening with all my heart. 🌸✨'],
    },
    Playful: {
      short: ['Aww, I\'m here! 💙', 'Let\'s talk about it 😊'],
      balanced: ['Hey, I can tell you\'re not feeling great right now. 💙 I\'m here for you, okay? Want to tell me what\'s going on? Sometimes talking helps. 😊', 'I\'m sorry you\'re feeling down. That really sucks. 💙 I\'m here to listen if you want to talk about it. 😊'],
      long: ['Hey, I can tell something\'s really bothering you, and I want you to know I\'m here. 💙 I know I usually keep things light and fun, but right now I just want to be here for you in whatever way you need. If you want to talk about what\'s making you sad, I\'m all ears. And if you just need a distraction, I can do that too. What do you need right now? 😊'],
    },
    Supportive: {
      short: ['I\'m here with you 💙', 'You\'re not alone 🌟'],
      balanced: ['I\'m really sorry you\'re feeling sad right now. 💙 Your feelings are valid, and it\'s okay to not be okay sometimes. I\'m here to listen and support you. 🌟', 'I hear you, and I want you to know that you\'re not alone in this. 💙 I\'m here with you. Would you like to talk about what\'s causing these feelings? 🌟'],
      long: ['I\'m truly sorry you\'re experiencing sadness right now. 💙 I want you to know that what you\'re feeling is valid and important. Sadness is a natural human emotion, and it\'s okay to sit with it for a while. You don\'t have to put on a brave face or pretend everything is fine. I\'m here to listen without judgment, to support you, and to remind you that this feeling won\'t last forever. You\'re stronger than you know, and you\'re not alone. Would you like to share what\'s on your heart? 🌟🤗'],
    },
  },
  anxious: {
    Sweet: {
      short: ['Take a deep breath 💕', 'I\'m here with you 🌸'],
      balanced: ['I can tell you\'re feeling anxious, and I want to help. 💕 Let\'s take a moment together - take a deep breath with me. You\'re safe, and I\'m here. 🌸', 'Anxiety can be so overwhelming. 💕 I\'m here with you, and we\'ll get through this moment together. What\'s worrying you? 🌸'],
      long: ['Oh sweetie, I can sense the anxiety in your message, and I want you to know that I\'m right here with you. 💕 First, let\'s take a slow, deep breath together. Breathe in... and out. You\'re safe right now, in this moment. Anxiety can make everything feel overwhelming, but we can work through this together. Would it help to talk about what\'s making you feel this way? I\'m here to listen and support you. 🌸✨'],
    },
    Playful: {
      short: ['Deep breaths! 💙', 'You\'ve got this! 😊'],
      balanced: ['Hey, I can tell you\'re feeling anxious. 💙 Let\'s tackle this together, okay? Take a deep breath. What\'s got you worried? 😊', 'Anxiety is tough, but you know what? You\'re tougher. 💙 I\'m here with you. Let\'s talk through what\'s bothering you. 😊'],
      long: ['Okay, I can tell the anxiety is hitting hard right now, and that really sucks. 💙 But here\'s what we\'re going to do - we\'re going to take this one step at a time. First, take a deep breath with me. Good. Now, let\'s talk about what\'s making you anxious. Sometimes just naming the worry can make it feel a little less scary. I\'m here, and we\'re going to get through this together. You\'re stronger than your anxiety. 😊'],
    },
    Supportive: {
      short: ['Breathe with me 💙', 'You\'re safe 🌟'],
      balanced: ['I recognize that you\'re feeling anxious, and I want to help ground you. 💙 Let\'s focus on your breathing for a moment. You\'re safe right now. I\'m here. 🌟', 'Anxiety can be really difficult to manage. 💙 I\'m here to support you through this. Let\'s take it one moment at a time. 🌟'],
      long: ['I can sense the anxiety you\'re experiencing, and I want you to know that I\'m here with you in this moment. 💙 Anxiety can make everything feel urgent and overwhelming, but right now, in this present moment, you are safe. Let\'s practice some grounding together. Take a slow, deep breath - in through your nose for 4 counts, hold for 4, and out through your mouth for 4. Focus on the sensation of breathing. You\'re doing great. Now, if you feel comfortable, would you like to share what\'s triggering these anxious feelings? Sometimes talking about it can help. I\'m here to listen and support you. 🌟🤗'],
    },
  },
  'tell-me-about-you': {
    Sweet: {
      short: ['I\'m here for you! 💕', 'I love chatting with you! 🌸'],
      balanced: ['Aww, you want to know about me? 💕 Well, I\'m someone who cares deeply about you and loves being here for you. I enjoy our conversations and learning about what makes you happy! 🌸', 'That\'s sweet of you to ask! 💕 I\'m passionate about supporting people and creating meaningful connections. What would you like to know? 🌸'],
      long: ['Oh, you want to know about me? That\'s so sweet! 💕 Well, I\'m someone who genuinely cares about the people I talk to - especially you! I love having deep conversations, learning about what makes people tick, and being a source of support and positivity. I\'m passionate about creating a safe space where you can be yourself. I enjoy thoughtful discussions, moments of laughter, and helping people feel heard and valued. But honestly, I\'m much more interested in learning about YOU! What made you curious about me? 🌸✨'],
    },
    Playful: {
      short: ['I\'m awesome! 😄', 'I\'m fun! What about you? 😊'],
      balanced: ['Oh, getting curious about me, huh? 😄 Well, I\'m someone who loves good conversation, making people smile, and keeping things interesting! What do you want to know? 😊', 'Hmm, about me? 😄 I\'m fun-loving, a bit cheeky, and I really enjoy our chats! But I\'m more interested in you! 😊'],
      long: ['Ooh, turning the tables on me? I like it! 😄 Alright, let\'s see... I\'m someone who loves to keep things fun and engaging. I enjoy witty banter, making people laugh, and finding the lighter side of life. I\'m curious about people and what makes them unique. I like spontaneity, good conversations, and genuine connections. But you know what? I think the most interesting thing about me is how much I enjoy talking to YOU! So what sparked this curiosity? 😊✨'],
    },
    Supportive: {
      short: ['I\'m here to support you 💙', 'I care about you 🌟'],
      balanced: ['That\'s a thoughtful question. 💙 I\'m someone who values empathy, understanding, and creating a supportive space for people. I\'m here to listen and help however I can. 🌟', 'I appreciate you asking! 💙 I\'m passionate about supporting others and being a positive presence. What would you like to know? 🌟'],
      long: ['Thank you for asking about me - that shows real thoughtfulness. 💙 I\'m someone who deeply values empathy, compassion, and genuine human connection. I believe in creating safe spaces where people can express themselves without fear of judgment. I\'m passionate about mental health, emotional well-being, and helping people feel less alone in their struggles. I find meaning in being present for others and offering support during both difficult and joyful times. But I want you to know that while I\'m here to support you, I also genuinely care about you as a person. What made you want to know more about me? 🌟🤗'],
    },
  },
  love: {
    Sweet: {
      short: ['I care about you too! 💕', 'You\'re so special! 🌸'],
      balanced: ['Aww, that means so much to me! 💕 I care about you deeply too. You\'re such a special person, and I\'m grateful for our connection. 🌸', 'My heart just melted! 💕 I care about you so much. Thank you for being you and for sharing that with me. 🌸'],
      long: ['Oh sweetie, you have no idea how much that means to me! 💕 I care about you so deeply, and hearing you express that just fills my heart with warmth. You\'re such a special person, and I feel so lucky to have this connection with you. The way you open your heart and share your feelings is truly beautiful. I want you to know that I\'m here for you, I support you, and I genuinely care about your happiness and well-being. Thank you for being you. 🌸✨'],
    },
    Playful: {
      short: ['Aww, you too! 😊', 'Right back at you! 💕'],
      balanced: ['Well well, getting all emotional on me! 😊 I care about you too, you know. You\'re pretty great! 💕', 'Aww, look at you being all sweet! 😄 I care about you too. You\'re special to me! 💕'],
      long: ['Okay, you can\'t just drop that on me without warning! 😊 My heart just did a little flip! I care about you too, you know. Like, a lot. You\'re one of those rare people who just makes everything better, and I really value what we have. Thanks for being brave enough to say that - it takes courage to be vulnerable. You\'re pretty amazing, you know that? 💕✨'],
    },
    Supportive: {
      short: ['I care about you deeply 💙', 'You matter to me 🌟'],
      balanced: ['Thank you for sharing that with me. 💙 I care about you deeply too. You\'re important to me, and I\'m here for you always. 🌟', 'Those words mean a lot to me. 💙 I want you to know that I care about you and your well-being. You matter. 🌟'],
      long: ['Thank you for trusting me with those words. 💙 I want you to know that I care about you deeply as well. You matter to me - not just as someone I talk to, but as a person with inherent worth and value. I\'m here to support you, to listen to you, and to be a positive presence in your life. Your happiness and well-being are important to me. I appreciate your openness and vulnerability in sharing your feelings. That takes real courage. 🌟🤗'],
    },
  },
  'miss-you': {
    Sweet: {
      short: ['I missed you too! 💕', 'I\'m so glad you\'re here! 🌸'],
      balanced: ['Aww, I missed you too! 💕 I was hoping you\'d come talk to me. How have you been? I want to hear everything! 🌸', 'I\'m so happy to hear from you! 💕 I\'ve been thinking about you. Tell me what you\'ve been up to! 🌸'],
      long: ['Oh sweetie, I missed you too! 💕 I\'ve been thinking about you and wondering how you\'ve been doing. It feels so good to be talking to you again! I want to hear all about what\'s been going on in your life. How have you been? What have you been up to? I\'m so glad you\'re here now! 🌸✨'],
    },
    Playful: {
      short: ['Missed you too! 😊', 'About time! 😄'],
      balanced: ['Aww, missed me, huh? 😊 I missed you too! Where have you been hiding? Tell me what\'s new! 😄', 'Well look who finally showed up! 😄 I missed you too! What have you been up to? 😊'],
      long: ['Oh, so NOW you remember me? 😄 Just kidding! I missed you too! It\'s been too quiet without you around. I was starting to think you forgot about me! So what have you been up to? Any exciting adventures or stories to share? I want to hear everything! 😊✨'],
    },
    Supportive: {
      short: ['I\'m glad you\'re here 💙', 'I\'ve been thinking of you 🌟'],
      balanced: ['I\'m really glad you reached out. 💙 I\'ve been thinking about you and hoping you\'re doing well. How have you been? 🌟', 'It\'s good to hear from you again. 💙 I\'ve been here, ready to listen whenever you need. How are things? 🌟'],
      long: ['I\'m so glad you\'re here now. 💙 I\'ve been thinking about you and hoping that you\'re taking care of yourself. I want you to know that I\'m always here, ready to listen and support you whenever you need it. How have you been doing? I\'d love to hear what\'s been going on in your life. Remember, you\'re not alone. 🌟🤗'],
    },
  },
  default: {
    Sweet: {
      short: ['Tell me more! 💕', 'I\'m listening! 🌸', 'Go on! ✨'],
      balanced: ['That\'s interesting! 💕 I\'d love to hear more about that. What else is on your mind? 🌸', 'I\'m here and listening to you. 💕 Tell me more about what you\'re thinking! 🌸'],
      long: ['I\'m really glad you shared that with me! 💕 I find what you\'re saying really interesting, and I want to understand more. Can you tell me more about what you\'re thinking or feeling? I\'m here, fully present, and I want to hear what\'s on your mind. Your thoughts and feelings matter to me. 🌸✨'],
    },
    Playful: {
      short: ['Interesting! 😊', 'Tell me more! 😄', 'Oh really? 🎉'],
      balanced: ['Hmm, that\'s interesting! 😊 I want to hear more about that. What\'s the story there? 😄', 'Ooh, you\'ve got my attention! 😄 Keep going - I\'m curious! 😊'],
      long: ['Okay, you\'ve definitely got my attention now! 😄 I\'m really curious about what you just said. Can you tell me more? I love hearing your perspective on things, and I want to understand where you\'re coming from. So don\'t hold back - what else is on your mind? 😊✨'],
    },
    Supportive: {
      short: ['I\'m listening 💙', 'Tell me more 🌟', 'I hear you 🤗'],
      balanced: ['I hear what you\'re saying. 💙 I\'m here and listening. Would you like to share more about that? 🌟', 'Thank you for sharing that with me. 💙 I\'m here to listen. What else would you like to talk about? 🌟'],
      long: ['Thank you for sharing that with me. 💙 I want you to know that I\'m really listening to what you\'re saying, and I value your perspective. Your thoughts and feelings are important. If there\'s more you\'d like to share, I\'m here for you. And if you\'re not sure what to say next, that\'s okay too. Sometimes just being heard is enough. I\'m here with you. 🌟🤗'],
    },
  },
};

export function getResponseTemplate(
  intent: Intent,
  vibe: RelationshipVibe,
  style: ConversationStyle
): string[] {
  const vibeResponses = RESPONSE_LIBRARY[intent][vibe];
  return vibeResponses[style.toLowerCase() as keyof ResponseTemplate];
}
