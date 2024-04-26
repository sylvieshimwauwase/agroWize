import React, { createContext, useState, useEffect } from "react";

const JoinedCommunitiesContext = createContext({
      joinedCommunities: [],
      setJoinedCommunities: () => {},
});

const JoinedCommunitiesProvider = ({ children }) => {
      const [joinedCommunities, setJoinedCommunities] = useState([]);

      useEffect(() => {
            const joinedCommunities = async () => {
                  const response = await axios.post(`${Keys.base_url}/communitiesJoined`, {

                  }
            }
}