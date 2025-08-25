import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, MeshDistortMaterial } from '@react-three/drei'

export default function FloatingCube({ position = [0, 0, 0], color = "#00d4ff" }) {
  const meshRef = useRef()
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1
    }
  })

  return (
    <Box
      ref={meshRef}
      args={[1, 1, 1]}
      position={position}
      castShadow
      receiveShadow
    >
      <MeshDistortMaterial
        color={color}
        speed={2}
        distort={0.3}
        radius={1}
        transparent
        opacity={0.8}
      />
    </Box>
  )
}
