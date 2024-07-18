import { useState } from 'react';
import { supabase } from "@/services/SupabaseClient";
import { useAppDispatch } from '@/store/store';
import { setUserState } from '@/store/feature/UserSlice';


const useUser = () => {
  const [user, setUser] = useState<any>({});
  const dispatch=useAppDispatch()

  const SignUp=async () => {
      const Localdata =  localStorage.getItem('sb-njfoazzjpjtmzczahkso-auth-token');
      const signUpData = localStorage.getItem("signUpData");

      if (Localdata && signUpData) {
        try {
          const Data = JSON.parse(Localdata);
          const { Name, Password } = JSON.parse(signUpData);

          const useData = {
            id: Data.user.identities[0].id,
            name: Name,
            password: Password,
            email: Data.user.identities[0].email,
          };

        

          const { data, error } = await supabase
            .from('user_table')
            .select('*')
            .eq('email', useData.email);

          if (error) {
           console.log(error)
           
           return
          }

          if (data.length > 0) {
            console.log('helllo')
            setUser(data[0].name);
            dispatch(setUserState({
              Name:data[0].name,
              Email:data[0].email,
              id:data[0].id
            }))
            return data[0].name;
           
          } else {
           
            const { data: newUser, error: insertError } = await supabase
              .from('user_table')
              .insert([useData]);

            if (insertError) {
              console.error('Error inserting new user:', insertError);
              return;
            }
          
            setUser(Name);

            dispatch(setUserState({
              Name:Name,
              Email:Data.user.identities[0].email,
              id:Data.user.identities[0].id
            }))
            return Name
          }
        } catch (error) {
          console.error('Error parsing JSON data from localStorage:', error);
        }
      }
      return user
    };

    const Login = async (Email: string, password: string) => {
      try {
        const { data, error } = await supabase
          .from('user_table')
          .select('name, email,id')
          .eq('email', Email)
          .eq('password', password);
    
        if (error) {
          console.error('Error:', error.message);
          setUser("no user");
          return null; // Return null or handle the error as needed
        }
    
        if (data && data.length > 0) {
          setUser(data[0].name);
          return data[0]; // Return the user data if login is successful
        } else {
          console.log('No user found or incorrect password');
          setUser(' '); // Set user state to a default value
          return null; // Return null or handle no user found case
        }
      } catch (error) {
        console.error('Error:', error);
        setUser("no user");
        return null; // Return null or handle any unexpected errors
      }
    };

    const Logout=()=>{
      localStorage.clear
      dispatch(setUserState({
        Name:"",
        Email:"",
        id:""
      }))
      
    }
    

  return {SignUp,Login,Logout};
};

export default useUser;
