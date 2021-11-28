import Image from 'next/image';

function About() {
    return (
        <div>
            <Image
                src="/images/profile.jpeg" // Route of the image file
                height={144} // Desired size with correct aspect ratio
                width={144} // Desired size with correct aspect ratio
                alt="Your Name"
            />        
        </div>
    )
  }
  
  export default About