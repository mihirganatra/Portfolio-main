import * as THREE from "three";
function PlayerModel({ nodes, materials, scale, position, rotation, group }) {
	return (
		<group
			dispose={null}
			scale={scale}
			position={position}
			ref={group}
			rotation={rotation}
		>
			<group>
				<primitive object={nodes.Hips} />

				{/* Body Skin */}
				<skinnedMesh
					frustumCulled={false}
					geometry={nodes.Wolf3D_Body.geometry}
					material={materials.Wolf3D_Body}
					skeleton={nodes.Wolf3D_Body.skeleton}
				/>

				{/* Pants - black */}
				<skinnedMesh
					frustumCulled={false}
					geometry={nodes.Wolf3D_Outfit_Bottom.geometry}
					material={
						new THREE.MeshStandardMaterial({
							color: "#000000",
							roughness: 0.8,
							metalness: 0.1,
						})
					}
					skeleton={nodes.Wolf3D_Outfit_Bottom.skeleton}
				/>

				{/* Shoes */}
				<skinnedMesh
					frustumCulled={false}
					geometry={nodes.Wolf3D_Outfit_Footwear.geometry}
					material={materials.Wolf3D_Outfit_Footwear}
					skeleton={nodes.Wolf3D_Outfit_Footwear.skeleton}
				/>

				{/* Shirt - white */}
				<skinnedMesh
					frustumCulled={false}
					geometry={nodes.Wolf3D_Outfit_Top.geometry}
					material={
						new THREE.MeshStandardMaterial({
							color: "#ffffff",
							roughness: 0.6,
							metalness: 0.05,
						})
					}
					skeleton={nodes.Wolf3D_Outfit_Top.skeleton}
				/>

				{/* Hair */}
				<skinnedMesh
					frustumCulled={false}
					geometry={nodes.Wolf3D_Hair.geometry}
					material={materials.Wolf3D_Hair}
					skeleton={nodes.Wolf3D_Hair.skeleton}
				/>

				{/* Eyes */}
				<skinnedMesh
					frustumCulled={false}
					name="EyeLeft"
					geometry={nodes.EyeLeft.geometry}
					material={materials.Wolf3D_Eye}
					skeleton={nodes.EyeLeft.skeleton}
					morphTargetDictionary={nodes.EyeLeft.morphTargetDictionary}
					morphTargetInfluences={nodes.EyeLeft.morphTargetInfluences}
				/>
				<skinnedMesh
					frustumCulled={false}
					name="EyeRight"
					geometry={nodes.EyeRight.geometry}
					material={materials.Wolf3D_Eye}
					skeleton={nodes.EyeRight.skeleton}
					morphTargetDictionary={nodes.EyeRight.morphTargetDictionary}
					morphTargetInfluences={nodes.EyeRight.morphTargetInfluences}
				/>

				{/* Head / Face */}
				<skinnedMesh
					frustumCulled={false}
					name="Wolf3D_Head"
					geometry={nodes.Wolf3D_Head.geometry}
					material={materials.Wolf3D_Skin}
					skeleton={nodes.Wolf3D_Head.skeleton}
					morphTargetDictionary={nodes.Wolf3D_Head.morphTargetDictionary}
					morphTargetInfluences={nodes.Wolf3D_Head.morphTargetInfluences}
				/>

				{/* Teeth */}
				<skinnedMesh
					frustumCulled={false}
					name="Wolf3D_Teeth"
					geometry={nodes.Wolf3D_Teeth.geometry}
					material={materials.Wolf3D_Teeth}
					skeleton={nodes.Wolf3D_Teeth.skeleton}
					morphTargetDictionary={nodes.Wolf3D_Teeth.morphTargetDictionary}
					morphTargetInfluences={nodes.Wolf3D_Teeth.morphTargetInfluences}
				/>

				{/* Spectacles / Glasses (optional - if model exists) */}
				{nodes.Glasses && (
					<skinnedMesh
						frustumCulled={false}
						geometry={nodes.Glasses.geometry}
						material={
							new THREE.MeshStandardMaterial({
								color: "#000000",
								roughness: 0.2,
								metalness: 0.5,
								transparent: true,
								opacity: 0.6,
							})
						}
						skeleton={nodes.Glasses.skeleton}
					/>
				)}
			</group>
		</group>
	);
}

export default PlayerModel;
