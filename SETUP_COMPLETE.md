💾 **COMPLETE NODE.JS DISCORD SELFBOT**

🎯 **PROJECT OVERVIEW**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Name: Discord Selfbot (Node.js)
Type: Discord Bot / Self-bot
Language: JavaScript (Node.js)
Framework: discord.js v14.14.0
Database: JSON (Local Storage)

---

📦 **INSTALLED SUCCESSFULLY**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✅ Core Files:
  • index.js - Main bot entry point
  • config.js - Configuration loader
  • package.json - Dependencies

✅ Commands (17 commands):
  Music (6):
    • play.js - Play songs
    • stop.js - Stop music
    • pause.js - Pause playback
    • resume.js - Resume playback
    • skip.js - Skip songs
    • queue.js & nowplaying.js - Queue display
  
  Triggers (3):
    • addtrigger.js - Add trigger
    • removetrigger.js - Remove trigger
    • viewtriggers.js - View triggers
  
  Owner (5):
    • addwaitlist.js - Add to waitlist
    • removewaitlist.js - Remove from waitlist
    • viewwaitlist.js - View waitlist
    • cloneserver.js - Clone server
    • accountstatus.js - Account status
  
  AI (5):
    • ai.js - Chat with AI
    • aienable.js - Enable auto-response
    • aidisable.js - Disable auto-response
    • aistatus.js - Show AI status
    • airclear.js - Clear history
  
  Utility (1):
    • help.js - Help command

✅ Events (2):
  • ready.js - Bot ready event
  • messageCreate.js - Message handler

✅ Utilities (3):
  • triggerManager.js - Trigger management
  • waitlistManager.js - Waitlist management
  • aiManager.js - AI chat integration

✅ Configuration:
  • .env.example - Template
  • .gitignore - Git ignore rules

---

🚀 **QUICK START**
━━━━━━━━━━━━━��━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. Install dependencies:
   npm install

2. Create .env file:
   cp .env.example .env

3. Add your credentials to .env:
   DISCORD_TOKEN=your_token
   BOT_OWNER_ID=1390807168126554234
   NVIDIA_API_KEY=your_api_key

4. Run the bot:
   npm start

---

⚙️ **CONFIGURATION**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

DISCORD_TOKEN         → Discord bot token (required)
BOT_OWNER_ID          → 1390807168126554234
PREFIX                → 1
LAVALINK_WS           → ws://lavalinkv4.serenetia.com:80/v4/websocket
LAVALINK_REST         → http://lavalinkv4.serenetia.com/v4
LAVALINK_PASSWORD     → https://dsc.gg/ajidevserver
NVIDIA_API_KEY        → AI API key
ENABLE_SERVER_CLONE   → true

---

🎮 **COMMANDS**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

MUSIC (Prefix: 1)
  1play <song>        → Play song
  1stop               → Stop & disconnect
  1pause              → Pause
  1resume             → Resume
  1skip               → Skip
  1queue              → Show queue
  1np                 → Now playing

TRIGGERS (Owner Only)
  1addtrigger <t> | <r> → Add trigger
  1removetrigger <t>    → Remove trigger
  1viewtriggers         → View triggers

OWNER (Owner Only)
  1addwaitlist @user <reason>   → Add to waitlist
  1removewaitlist @user         → Remove from waitlist
  1viewwaitlist                 → View waitlist
  1cloneserver                  → Clone server
  1accountstatus                → Account status

AI (Owner Only)
  1ai <prompt>        → Chat with AI
  1aienable           → Enable auto-response
  1aidisable          → Disable auto-response
  1aistatus           → Show AI status
  1airclear           → Clear history

UTILITY
  1help               → Show help

---

🤖 **FEATURES**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✨ Music Playback
  • Play from YouTube/URLs
  • Queue management
  • Playback controls (pause/resume/skip)

🤖 AI Chat
  • NVIDIA Llama 2 API integration
  • Auto-response on mention (when enabled)
  • Conversation history tracking
  • Enable/disable commands

🔔 Custom Triggers
  • Owner-controlled messages
  • Pattern matching
  • Add/remove/view commands

👑 Owner Commands
  • Waitlist management
  • Server cloning
  • Account status

📁 Data Persistence
  • JSON-based storage
  • Auto-created directories
  • Triggers, waitlist, AI config

---

📂 **FILE STRUCTURE**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Self-bot/
├── index.js
├── config.js
├── package.json
├── .env.example
├── .gitignore
├── README.md
├── commands/
│   ├── music/
│   │   ├── play.js
│   │   ├── stop.js
│   │   ├── pause.js
│   │   ├── resume.js
│   │   ├── skip.js
│   │   ├── queue.js
│   │   └── nowplaying.js
│   ├── triggers/
│   │   ├── addtrigger.js
│   │   ├── removetrigger.js
│   │   └── viewtriggers.js
│   ├── owner/
│   │   ├── addwaitlist.js
│   │   ├── removewaitlist.js
│   │   ├── viewwaitlist.js
│   │   ├── cloneserver.js
│   │   └── accountstatus.js
│   ├── ai/
│   │   ├── ai.js
│   │   ├���─ aienable.js
│   │   ├── aidisable.js
│   │   ├── aistatus.js
│   │   └── airclear.js
│   └── utility/
│       └── help.js
├── events/
│   ├── ready.js
│   └── messageCreate.js
├── utils/
│   ├── triggerManager.js
│   ├── waitlistManager.js
│   └── aiManager.js
└── data/
    ├── triggers.json
    ├── waitlist.json
    └── ai_config.json

---

📚 **DEPENDENCIES**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

discord.js@^14.14.0      → Discord API wrapper
dotenv@^16.3.1          → Environment variables
axios@^1.6.0            → HTTP requests
fs-extra@^11.2.0        → File system utilities

DEV:
nodemon@^3.0.2          → Auto-reload

---

🔒 **SECURITY**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

⚠️ Important:
  • Keep .env secure
  • Never commit .env to Git
  • Only owner can use commands
  • Self-bots violate Discord ToS
  • Use at own risk

---

💡 **USAGE EXAMPLES**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Music:
  1play rick astley
  1pause
  1resume
  1skip

AI:
  1ai What is Python?
  1aienable
  @bot hello  (auto-responds)
  1airclear

Triggers:
  1addtrigger hello | Hi there!
  1viewtriggers
  1removetrigger hello

Waitlist:
  1addwaitlist @user Reason
  1viewwaitlist
  1removewaitlist @user

---

🆘 **TROUBLESHOOTING**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Bot doesn't respond:
  ✓ Check npm start is running
  ✓ Verify DISCORD_TOKEN
  ✓ Check you're the owner
  ✓ Enable MESSAGE_CONTENT intent

AI not working:
  ✓ Verify NVIDIA_API_KEY
  ✓ Check internet connection
  ✓ Verify API key is active

Triggers not working:
  ✓ Check 1viewtriggers
  ✓ Verify you're the owner
  ✓ Trigger is case-insensitive

---

📞 **SUPPORT**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

GitHub: https://github.com/bhavigaming1234-crypto/Self-bot
Discord: https://dsc.gg/ajidevserver

---

📝 **NOTES**
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✓ All commands are owner-only
✓ Prefix can be changed in config
✓ AI history is per-user
✓ Triggers are case-insensitive
✓ Waitlist persists across restarts
✓ All data stored locally in JSON

---

✅ **SETUP COMPLETE!**

Your complete Node.js Discord Selfbot is ready to use.
Next steps:
  1. npm install
  2. Create .env file with your credentials
  3. npm start
  4. Use 1help to see commands
