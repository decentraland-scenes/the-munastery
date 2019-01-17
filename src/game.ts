function addGLTF(path: string, clip?: string, yRotation?: number) {
  const base = new Entity()

  const baseGLTF = new GLTFShape(path)
  base.set(baseGLTF)
  
  let baseTransform = new Transform()
  baseTransform.position.x = 0
  baseTransform.position.y = 0
  baseTransform.position.z = 0
  baseTransform.rotate(Vector3.Up(), yRotation == null? yRotation: 90)
  base.set(baseTransform)

  if(clip) {
    const waterClip = new AnimationClip(clip)
    baseGLTF.addClip(waterClip)
    waterClip.play()
  }
  
  engine.addEntity(base)

  return baseGLTF
}

addGLTF("models/Base.gltf", null, 270)
addGLTF("models/Tree1.gltf", "Armature_Idle", 270)
addGLTF("models/Tree2.gltf", "Armature_Idle", 270)
addGLTF("models/Tree3.gltf", "Armature_Idle", 270 )
addGLTF("models/Tree4.gltf", "Armature_Idle", 270)
addGLTF("models/Tree5.gltf", "Armature_Idle", 270)
addGLTF("models/Water.gltf")
addGLTF("models/WaterFountain.gltf")
addGLTF("models/Fire.gltf", "FireBig_Idle")
addGLTF("models/B1.gltf", "Armature_Idle")
addGLTF("models/B2.gltf", "Armature_Idle")
addGLTF("models/B3.gltf", "Armature_Idle")
addGLTF("models/B4.gltf", "Armature_Idle")
addGLTF("models/B5.gltf", "Armature_Idle")
addGLTF("models/B6.gltf", "Armature_Idle")
addGLTF("models/B7.gltf", "Armature_Idle")
addGLTF("models/B8.gltf", "Armature_Idle")
addGLTF("models/B9.gltf", "Armature_Idle")
addGLTF("models/Ground.gltf", null, 0)

addGLTF("models/Colliders.gltf", null, 90)