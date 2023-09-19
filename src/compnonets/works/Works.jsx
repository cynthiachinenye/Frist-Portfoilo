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
                  <img src='Assest/phone.png' />
                  <h2>Title</h2>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nunc vitae mi diam. Vestibulum ante ipsum primis in faucibus
                    orci luctus et ultrices posuere cubilia curae;
                    Sed consectetur eu nibh in fermentum.
                    Mauris luctus pulvinar leo malesuada tristique.
                    Proin sed varius erat.
                    Cras condimentum mauris id augue congue fringilla.</p>
                </div>
              </div>
            </div>
            <div className='right'></div>
          </div>
        </div>
      </div>

    </div>
  )
}
