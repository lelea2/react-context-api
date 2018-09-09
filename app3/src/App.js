import React from 'react';

const UserContext = React.createContext({});

const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

class App extends React.Component {
  state = {
    user: {
      username: 'jioke',
      firstName: 'Kingsley',
      lastName: 'Silas'
    }
  }

  render() {
    return (
      <UserProvider value={this.state.user}>
        <User />
      </UserProvider>
    );
  }
}

const User = () => (
  <div>
    <UserProfile />
  </div>
);

const UserProfile = (props) => (
  <UserConsumer>
    {context => {
      return(
        <div>
          <h2>Profile Page of {context.username}</h2>
          <UserDetails />
        </div>
      )
    }}
  </UserConsumer>
);

const UserDetails = () => (
  <div>
    <UserConsumer>
      {context => {
        return (
          <div>
            <p>Userame: {context.username}</p>
            <p>First Name: {context.firstName}</p>
            <p>Last Name: {context.lastName}</p>
          </div>
        )
      }}
    </UserConsumer>
  </div>
);

export default App;
