import HeaderBox from '@/components/HeaderBox'
import RightSidebar from '@/components/RightSidebar'
import TotalBalanceBox from '@/components/TotalBalanceBox'

const Home = () => {
 const loggedIn = {firstName: 'OfficialYash', lastName:'Arora', email:'G4bru22@gmail.com'};
    return (
    <section className='home'>
        <div className='home-content'>
            <header className='home-header'>
               <HeaderBox type="greeting" title="Welcome" user={
                loggedIn?.firstName || 'Guest'} subtext="Access and Manage your account and transaction efficiently."
               />
               <TotalBalanceBox accounts={[]} totalBanks={1} totalCurrentBalance={1350.35} />
            </header>
            recent transaction
        </div>
                <RightSidebar user={loggedIn} transactions={[]} banks={[{currentBalance:123.50},{currentBalance:500.50}]}/>
    </section>
  )
}

export default Home