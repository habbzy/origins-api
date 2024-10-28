export interface AvatarBadgeData {
  badgeIndex: number;
  code: string;
  name: string;
  description: string;
}

export interface AvatarData {
  uniqueId: string;
  name: string;
  figureString: string;
  motto: string;
  online: boolean;
  lastAccessTime: string;
  memberSince: string;
  profileVisible: boolean;
  currentLevel: number;
  currentLevelCompletePercent: number;
  totalExperience: number;
  starGemCount: number;
  selectedBadges: AvatarBadgeData[];
  bouncerPlayerId: string | null;
}

export interface BattleballMatch {
  metadata: Metadata;
  info: Info;
}

export interface Metadata {
  matchId: string;
  participantPlayerIds: string[];
}

export interface Info {
  gameCreation: number;
  gameDuration: number;
  gameEnd: number;
  gameMode: string;
  mapId: number;
  ranked: boolean;
  participants: Participant[];
  teams: Team[];
}

export interface Participant {
  gamePlayerId: string;
  gameScore: number;
  playerPlacement: number;
  teamId: number;
  teamPlacement: number;
  timesStunned: number;
  powerUpPickups: number;
  powerUpActivations: number;
  tilesCleaned: number;
  tilesColoured: number;
  tilesStolen: number;
  tilesLocked: number;
  tilesColouredForOpponents: number;
}

export interface Team {
  teamId: number;
  win: boolean;
  teamScore: number;
  teamPlacement: number;
}

export type PoseDirection = 'nw' | 'w' | 'sw' | 's' | 'se' | 'e' | 'ne' | 'n';

export type PoseSize = 'big' | 'bighead' | 'smallhead' | 'large' | 'largehead';

export type PoseGesture = 'none' | 'smile' | 'angry' | 'surprise' | 'sad' | 'speak' | 'eyebrows';

export type PoseAction = 'stand' | 'sit' | 'walk' | 'wave' | 'lay' | 'carry' | 'drink';

export interface Pose {
  s: number;
  g: number;
  d: number;
  h: number;
  a: number;
}

export interface HabboDenAvatarData {
  name: string;
  habbo_id: string;
  figure_string: string;
  online_status: boolean;
  console_tag: string;
  last_seen: string;
  rooms?: HabboDenRoom[];
  status?: boolean;
}

export interface HabboDenRoom {
  id: number;
  name: string;
  description: string | null;
  max_users: number;
  privacy: 'closed' | 'password' | 'open';
}
