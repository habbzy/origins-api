import type { Pose, PoseAction, PoseDirection, PoseGesture, PoseSize } from './types';

export interface GeneratePoseOptions {
  size?: PoseSize;
  direction?: PoseDirection;
  headDirection?: PoseDirection;
  action?: PoseAction;
  gesture?: PoseGesture;
}

export function generatePose(e: GeneratePoseOptions): Pose {
  const size = e.size ?? 'big';
  const direction = e.direction ?? 'sw';
  const headDirection = e.headDirection ?? direction;
  const action = e.action ?? 'stand';
  const gesture = e.gesture ?? 'smile';

  const sizeMap: Record<PoseSize, number> = {
    big: 0,
    bighead: 2,
    smallhead: 3,
    large: 4,
    largehead: 5,
  };

  const gestureMap: Record<PoseGesture, number> = {
    none: 0,
    smile: 1,
    angry: 2,
    surprise: 3,
    sad: 4,
    speak: 5,
    eyebrows: 6,
  };

  const directionMap: Record<PoseDirection, number> = {
    nw: 0,
    w: 1,
    sw: 2,
    s: 3,
    se: 4,
    e: 5,
    ne: 6,
    n: 7,
  };

  const actionMap: Record<PoseAction, number> = {
    stand: 0,
    sit: 1,
    walk: 2,
    wave: 3,
    lay: 4,
    carry: 5,
    drink: 6,
  };

  return {
    s: sizeMap[size],
    g: gestureMap[gesture],
    d: directionMap[direction],
    h: directionMap[headDirection],
    a: actionMap[action],
  };
}

export function poseToString(pose: Pose) {
  return Object.entries(pose)
    .map(([key, value]) => `${key}-${value}`)
    .join('.');
}
