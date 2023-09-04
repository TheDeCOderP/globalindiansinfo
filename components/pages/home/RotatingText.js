import Typical from 'react-typical';

const AnimatedText = () => {
  return (
    <div className="typing-text">
     
      <div className="body">
      <h4 className="p-1">Get All Global Information Related to </h4>
<h2 className="white">
<Typical
                steps={[
                  ' Business',
                  3000,
                  ' Events',
                  3000,
                  ' Travel',
                  3000,
                  ' Education',
                  3000,
                  ' Jobs',
                  3000,
                  ' Technology',
                  3000,
                  ' News',
                  3000,
                ]}
                wrapper="span"
                loop={Infinity}
              />


</h2>
</div>
</div>
    )
}

export default AnimatedText;