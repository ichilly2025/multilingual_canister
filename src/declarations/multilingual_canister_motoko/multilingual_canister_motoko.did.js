export const idlFactory = ({ IDL }) => {
  const User = IDL.Record({ 'id' : IDL.Text, 'username' : IDL.Text });
  return IDL.Service({
    'addUser' : IDL.Func([IDL.Text], [IDL.Text], []),
    'getUserCount' : IDL.Func([], [IDL.Nat], ['query']),
    'getUsers' : IDL.Func([], [IDL.Vec(User)], ['query']),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], []),
  });
};
export const init = ({ IDL }) => { return []; };
