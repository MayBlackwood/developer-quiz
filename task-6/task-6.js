// remove all setState because in my opinion there is no reason to return userID, tenantsID 
// or accessToken => with this hook we anyway redirect user to another page and can access to needed data from local storage

const useAuthProvide = () => {
  const history = useHistory();

  const userLogin = async (email, password, redirectPath) => {
    try {
      const { data } = await axios({
        method: 'post',
        url: `https://domain.com/api/login`,
        data: {
          email,
          password,
        },
      });

      if (data) {
        console.log(JSON.stringify(data, null, 2));
        if (data.type !== 'tenant') {
          alert('Unauthorized User');
        } else {
          window.localStorage.setItem('userId', data.userId);
          window.localStorage.setItem('tenantId', data.tenantId);
          window.localStorage.setItem('access_token', data.accessToken);

          console.log('tenantId:' + data.tenantId);

          history.push(redirectPath);
        }
      }
    } catch (e) {
      alert('Error Happened');
    }
  };

  return userLogin;
};
