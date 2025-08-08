export const idlFactory = ({ IDL }) => {
  return IDL.Service({ 'generate_id' : IDL.Func([], [IDL.Text], []) });
};
export const init = ({ IDL }) => { return []; };
