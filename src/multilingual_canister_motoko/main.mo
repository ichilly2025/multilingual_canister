import Array "mo:base/Array";
import IDGenerator "canister:multilingual_canister_rust";

actor {
  type User = {
    id: Text;
    username: Text;
  };

  private stable var users : [User] = [];

  public func greet(username : Text) : async Text {
    let userId = await IDGenerator.generate_id();
    return "Hello, " # username # " (" # userId # ")!";
  };

  public func addUser(username: Text) : async Text {
    let userId = await IDGenerator.generate_id();
    let newUser : User = {
      id = userId;
      username = username;
    };
    users := Array.append(users, [newUser]);
    return "User " # username # " (" # userId # ") added successfully!";
  };

  public query func getUsers() : async [User] {
    return users;
  };

  public query func getUserCount() : async Nat {
    return users.size();
  };

};
