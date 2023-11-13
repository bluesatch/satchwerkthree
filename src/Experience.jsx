import { 
    Text,
    Html,
    ContactShadows,
    PresentationControls, 
    Float, 
    Environment, 
    useGLTF
} from '@react-three/drei'

export default function Experience()
{
    const computer = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/macbook/model.gltf')

    const turntable = useGLTF('https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/turntable/model.gltf')

    return <>

        <Environment preset="city" />

        <color args={ [ '#109eff' ] } attach="background" />

        <PresentationControls 
            global 
            rotaton={ [ 0.13, 0.1, 0] }
            polar={ [ -0.4, 0.2 ] }
            azimuth={ [ -1, 0.75 ] } 
            config={ { mass: 2, tension: 400 } } 
            snap={ { mass: 4, tension: 400 } }  
        >
            <Float rotationIntensity={ 0.4 }>
                <rectAreaLight
                    width={ 2.5}
                    height={ 1.65}
                    intensity={ 65}
                    color="#109eff"
                    rotation={ [ 0.1, Math.PI, 0 ] }
                    position={ [ 0, 0.55, -1.15 ] } />
                <primitive 
                    object={computer.scene} 
                    position-y={ -1.2} 
                >
                <Html 
                    transform 
                    wrapperClass="htmlScreen" 
                    distanceFactor={ 1.17 }
                    position={ [ 0, 1.56, -1.4 ] }
                    rotation-x={ -0.256 }
                >
                    <iframe src="https://bluesatch.github.io/githubio/" />
                </Html>
                </primitive>
                <primitive object={turntable.scene} position={ [ 2.5, -0.25, 0.75 ] } />
                <Text
                    font='./bangers-v20-latin-regular.woff'
                    fontSize={ 1 }
                    position={ [ 2, 0.75, 0.75 ] }
                    rotation-y={ -1.25}
                    maxWidth={ visualViewport.width / 4 }
                    children="SATCH\nWERK"
                    textAlign="center"
                    color="black"
                >
                Satchwerk
                </Text>
            </Float>
        </PresentationControls>

        {/* dont' want shadow to rotate */}
        <ContactShadows position-y={ -1.4 } opacity={ 0.4   } scale={ 5 } blur={ 2.4 } />

    </>
}