import React from 'react';
import{Text, View} from 'react-native';
import { 
    Container,
    Header,
    UserInfo,
    Photo,
    User,
    UserGreeting,
    UserName,

} from './styles';

export function Dashboard (){
    return(
        <Container>
            <Header>
             <UserInfo>
                <Photo
                source={{ uri: 'https://avatars.githubusercontent.com/u/88693775?v=4'}}
                />    
                <User>
                    <UserGreeting> Olá, </UserGreeting>
                    <UserName>Pedro</UserName>
                </User>
            </UserInfo> 
            </Header>
        </Container>
    )
}

