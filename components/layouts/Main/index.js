import Header from '../../shared/Header'

const Main = ({ children, ...props }) => {
  return (
    <div className='centered-container'>
      <Header />
      {children}
    </div>
  )
}

export default Main
