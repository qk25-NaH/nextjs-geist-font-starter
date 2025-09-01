# Pusher Integration Setup Guide for CoachPro

## Frontend and Backend Structure

### Frontend Structure
```
src/
├── app/
│   ├── layout.tsx          # Root layout with Pusher provider
│   ├── page.tsx            # Main coaching app with tabs
│   └── api/                # Backend API routes
│       ├── pusher/
│       │   └── route.ts    # Pusher server configuration
│       ├── chat/
│       │   └── route.ts    # Chat API endpoints
│       └── leaderboard/
│           └── route.ts    # Leaderboard API endpoints
├── hooks/
│   └── use-pusher.ts       # Pusher client hooks
└── components/ui/          # Existing shadcn/ui components
```

### Backend API Endpoints
- **POST /api/pusher** - Trigger Pusher events
- **GET/POST /api/chat** - Chat messages and history
- **GET/POST /api/leaderboard** - Leaderboard data and updates

## Required Dependencies

Add these to your package.json:

```bash
npm install pusher pusher-js
npm install --save-dev @types/pusher-js
```

## Pusher Configuration Steps

### 1. Create Pusher Account
1. Go to [pusher.com](https://pusher.com)
2. Sign up for a free account
3. Create a new app
4. Note down your app credentials

### 2. Environment Variables
Create `.env.local` file with your Pusher credentials:

```env
PUSHER_APP_ID=your_pusher_app_id
PUSHER_SECRET=your_pusher_secret
NEXT_PUBLIC_PUSHER_KEY=your_pusher_key
NEXT_PUBLIC_PUSHER_CLUSTER=your_pusher_cluster
```

### 3. Pusher Channels Used

#### Chat System
- **Channel**: `chat-channel`
- **Events**: `new-message`
- **Data**: `{ id, user, message, timestamp, userId }`

#### Live Leaderboard
- **Channel**: `leaderboard-channel`
- **Events**: `ranking-update`
- **Data**: `{ leaderboard: [...] }`

## Frontend Integration

### Chat Component Usage
```tsx
import { useChat } from '@/hooks/use-pusher';

const ChatComponent = () => {
  const { messages, sendMessage } = useChat();
  
  const handleSend = () => {
    sendMessage("Hello!", "user123", "John Doe");
  };
  
  return (
    <div>
      {messages.map(msg => (
        <div key={msg.id}>{msg.message}</div>
      ))}
      <button onClick={handleSend}>Send</button>
    </div>
  );
};
```

### Leaderboard Component Usage
```tsx
import { useLeaderboard } from '@/hooks/use-pusher';

const LeaderboardComponent = () => {
  const { leaderboard, updateScore } = useLeaderboard();
  
  const handleScoreUpdate = () => {
    updateScore("user123", 50); // Add 50 points
  };
  
  return (
    <div>
      {leaderboard.map(user => (
        <div key={user.userId}>
          {user.rank}. {user.name} - {user.score}
        </div>
      ))}
    </div>
  );
};
```

## Backend Integration

### Server-side Pusher Trigger
```typescript
// In your API routes
import Pusher from 'pusher';

const pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID!,
  key: process.env.NEXT_PUBLIC_PUSHER_KEY!,
  secret: process.env.PUSHER_SECRET!,
  cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER!,
  useTLS: true,
});

// Trigger real-time update
await pusher.trigger('chat-channel', 'new-message', messageData);
```

## Real-time Features

### 1. Live Chat Support
- Real-time message delivery
- Support agent notifications
- Message history persistence
- Typing indicators (can be added)

### 2. Live Leaderboard
- Real-time ranking updates
- Score change notifications
- Position change indicators
- Automatic re-ranking

### 3. Future Pusher Integrations
- **Notifications**: `notification-channel`
- **Progress Updates**: `progress-channel`
- **Live Classes**: `class-{classId}-channel`
- **Admin Broadcasts**: `admin-channel`

## Testing Pusher Integration

### 1. Local Development
```bash
npm run dev
```

### 2. Test Chat
1. Open multiple browser tabs
2. Send messages in one tab
3. Verify real-time delivery in other tabs

### 3. Test Leaderboard
1. Trigger score updates via API
2. Verify real-time ranking changes
3. Check position change indicators

## Production Considerations

### 1. Channel Authentication
```typescript
// For private channels
const channel = pusher.subscribe('private-user-123');
```

### 2. Rate Limiting
- Implement message rate limiting
- Add user authentication checks
- Monitor Pusher usage limits

### 3. Error Handling
- Connection retry logic
- Fallback for offline scenarios
- Graceful degradation

## Pusher Dashboard Monitoring

Monitor these metrics in your Pusher dashboard:
- Connection count
- Message volume
- Channel subscriptions
- API usage

## Security Best Practices

1. **Environment Variables**: Never expose secrets in frontend
2. **Channel Authentication**: Use private channels for sensitive data
3. **Rate Limiting**: Implement API rate limiting
4. **Input Validation**: Sanitize all user inputs
5. **CORS Configuration**: Restrict origins in production

## Current Implementation Status

✅ **Completed**:
- Pusher server configuration
- Chat API endpoints
- Leaderboard API endpoints
- Client-side hooks
- Real-time message delivery
- Live leaderboard updates

🔄 **Ready for Pusher Setup**:
- Install dependencies
- Add environment variables
- Test real-time features

📋 **Future Enhancements**:
- Private channels for user-specific data
- Presence channels for online users
- Push notifications
- File sharing in chat
- Voice/video call integration
