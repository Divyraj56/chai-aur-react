import React, { useEffect } from 'react'

function Github() {
    const [data, setData] = React.useState([])
    useEffect(() => {
        fetch("https://api.github.com/users/Divyraj56")
        .then((response) => response.json())
        .then((data)=> {console.log(data)
        setData(data);}
    )
    },[])
  return (
		<div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl">
			Github followers: {data.followers}
			<img
            width={300}
				src={data.avatar_url}
				alt="gitpic"
            
			/>
		</div>
	);
}

export default Github