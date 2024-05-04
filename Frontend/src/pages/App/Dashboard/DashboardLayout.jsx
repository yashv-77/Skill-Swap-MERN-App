import React from 'react'

function DashboardLayout() {
<<<<<<< Updated upstream
=======
  const { authUser, setAuthUser, selectedChat, setSelectedChat, searchSkill, setSearchSkill } = useContext(AuthContext);
  const [isloading, setIsloading] = useState(false);
  const [searchResult, setSearchResult] = useState([]);
  

  const logOut = () => {
    localStorage.removeItem('userLocalData');
    navigate('/')
}
>>>>>>> Stashed changes
  return (
    <div>DashboardLayout</div>
  )
}

export default DashboardLayout