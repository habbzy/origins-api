import { md5Hash } from './crypto';
import { type GeneratePoseOptions, generatePose, poseToString } from './pose';
import type { AvatarData, BattleballMatch } from './types';

export const apiUrl = 'https://origins.habbo.com/api/public';
export const imagingUrl = 'https://www.habbo.com/habbo-imaging/avatar';
export const imagingSecret = 'ef2356a4926bf225eb86c75c52309c32';

export async function avatar(username: string): Promise<AvatarData | null> {
  let data: AvatarData | null = null;

  try {
    const response = await fetch(`${apiUrl}/users?name=${encodeURIComponent(username)}`);
    const responseData = (await response.json()) as AvatarData;

    if (typeof responseData?.uniqueId === 'string') {
      data = responseData as AvatarData;
    }
  } catch {}

  return data;
}

export async function avatarImageUrl(username: string, poseOptions: GeneratePoseOptions) {
  const data = await avatar(username);

  if (!data) {
    return null;
  }

  const pose = poseToString(generatePose(poseOptions));
  const imageHash = md5Hash(`${data.figureString}${pose}${imagingSecret}`);

  return `${imagingUrl}/${encodeURIComponent(`${data.figureString},${pose},${imageHash}`)}.png`;
}

export async function battleballMatchIds(playerId: string): Promise<string[]> {
  let data: string[] = [];

  try {
    const response = await fetch(`${apiUrl}/matches/v1/${encodeURIComponent(playerId)}/ids`);
    const responseData = (await response.json()) as string[];

    if (Array.isArray(responseData)) {
      data = responseData;
    }
  } catch {}

  return data;
}

export async function battleballMatch(matchId: string): Promise<BattleballMatch | null> {
  let data: BattleballMatch | null = null;

  try {
    const response = await fetch(`${apiUrl}/matches/v1/${encodeURIComponent(matchId)}`);
    const responseData = (await response.json()) as BattleballMatch;

    if (typeof responseData?.info?.gameCreation === 'number') {
      data = responseData;
    }
  } catch {}

  return data;
}

export * from './types';
