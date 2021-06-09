import Header from '../../shared/Header'

const Main = ({ children, ...props }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}

export default Main
