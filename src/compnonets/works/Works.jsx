import './work.scss'

export default function Works() {


  return (
    <div className='works' id='works'>
      <div className='slider'>
        <div className='container'>
          <div className='item'>
            <div className='left'>
              <div className='leftContainer'>
                <div className='imgContainer'>
                  <img src='Assets/phone2.png' alt='' />
                  
                </div>
                <h2>Title</h2>
                  <p>Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit.
                    Nunc vitae mi diam. 
                    Vestibulum ante ipsum primis
                  
                  
                    </p>
                    <span>Projects</span>
              </div>
            </div>
            <div className='right'>
               <img src='https://cdn.dribbble.com/userupload/5871349/file/original-5fe8fb23cbecadf2fe8f5410627b0bda.jpg?resize=400x300&vertical=center'/>
            </div>
          </div>
        </div>
      </div>
      <img src='Assets/arrows2.png' alt='' className='arrow left'/>
      <img src='Assets/arrows2.png' alt='' className='arrow right'/>

    </div>
  )
}
