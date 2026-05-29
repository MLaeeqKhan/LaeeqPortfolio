import React, { useEffect, useMemo, useRef } from 'react'
import { useGraph } from '@react-three/fiber'
import { useGLTF, useAnimations, useFBX } from '@react-three/drei'
import { SkeletonUtils } from 'three-stdlib'
import * as THREE from "three"

export function HackerRoom(props) {
  const group = useRef();

  const { scene } = useGLTF("/models/hacker-room.glb");
  const clone = useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone);

  const { animations } = useFBX("/models/Angry.fbx");
  
  const processedAnimations = useMemo(() => {
    const anims = [];
    if (animations && animations[0]) {
      const dance = animations[0].clone();
      dance.name = "Dance";
      anims.push(dance);
    }
    return anims;
  }, [animations]);

  const action = useAnimations(processedAnimations, group);

  useEffect(() => {
    if (action.actions["Dance"]) {
      action.actions["Dance"].reset().fadeIn(0.5).play();
    }
  }, [action]);

  return (
    <group {...props} ref={group} dispose={null}>
      <primitive object={clone} />
    </group>
  )
}

useGLTF.preload('/models/hacker-room.glb')
useFBX.preload('/models/Angry.fbx')