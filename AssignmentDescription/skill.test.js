// how to make every req object have "addedProperty" property added to it

app.get('/', (req, res) => {
  req.addedProperty // 'some value'
  const a = req.query.xyz 
})


app.post('/', (req, res) => {
    req.addedProperty // 'some value'
    
    const bodyJson = JSON.parse(req.body)
    const b = bodyJson.xyz 
})

// 2

const evt1 = new Event('first')
const evt2 = new Event('second')

document.addEventListener('first', () => {
 expensiveAction() // ~2500ms

 console.log('first');
})

document.addEventListener('second', () => {
 console.log('second');
});

setTimeout(() => {
 console.log('baboon');
}, 0);

document.dispatchEvent(evt1);
document.dispatchEvent(evt2);

// 3

function Bear () {
// make me
} // returns: { getFangs(), setFangs() }

const bear = Bear();

// undesired behavior
const bearDentist = bear => bear.fangs = 'white';
bear.fangs // white

// desired behavior
const bearDentist = bear => {
  return setFangs = () => 'white'
};

bear.fangs // undefined 
bear.getFangs() // 'white'

// 4

const Squares = () => (
  <BigSquare backgroundColor={'blue'}>
      <LittleSquare backgroundColor={'red'} />
  </BigSquare>
)

/*
  -Little square should be horizontally + vertically centered
  inside BigSquare. 
  
  -This should work no matter how big little square is.

  -They should both take backgroundColor props
*/

// style.css

{

.red {
  background-color: 'red';
}

.blue {
  background-color: 'blue';
}

.BigSquare {
  display: flex;
  justify-content: center;
  align-items: center;
  width: '3rem';
  height: '3rem';
}


.LittleSquare {
  width: '1rem';
  height: '1rem';
}


}

const BigSquare = (props) => (

  const { backgroundColor } = props

  return <div className=`BigSquare ${backgroundColor}`>
      {this.props.children}
  </div>
)

const LittleSquare = (props) => (
  
  const { backgroundColor } = props
  return <div className=`LittleSquare ${backgroundColor}`></div>

)


// 5

const App = () => (
  <BackgroundColor>
      {backgroundColor => (
          <BigSquare backgroundColor={backgroundColor}>
              <LittleSquare backgroundColor={'red'} />
          </BigSquare>
      )}
  </BackgroundColor>
)

const BackgroundColor = (Wrapped) => {
  class WrappedClass extends React.Component {
      render(){
          const backgroundColor = 'red'
          return <div>
              <Wrapped {...this.props, backgroundColor}>
          </div>
      }   
      
  }

  return WrappedClass
} 

