import '../portfoliolist/portfolioList.scss'

function PortfolioList({id,title,setList, active}) {
  return (
    <li className={active ? "portfolioList active " : "portfolioList"} onClick={()=> (setList(id))}>
    {title}
      
    </li>
  )
}

export default PortfolioList
