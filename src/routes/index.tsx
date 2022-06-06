import AuthRoutes from "./auth.routes";
import AppRoutes from "./app.routes";
import { useState, useEffect } from "react";
import { View, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Routes() {
    const [ name, setName ] = useState(false);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
      getData();
    },[])
  
    function getData() {
      try {
        AsyncStorage.getItem('UserName')
        .then( value => {
          if(value != null){
            setName(true);
            
          }
        }
        )
      } catch (error) {
        console.log(error)
      }
    }

    

return (
    <AppRoutes/> 
)
}
