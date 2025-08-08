# multilingual_canister
Create canisters in multilingual code (Monoko and Rust)

Welcome to my new `multilingual_canister` project and to the Internet Computer development community.

To learn more before you start working with `multilingual_canister`, see the following documentation available online:

- [Quick Start](https://internetcomputer.org/docs/current/developer-docs/setup/deploy-locally)
- [SDK Developer Tools](https://internetcomputer.org/docs/current/developer-docs/setup/install)
- [Motoko Programming Language Guide](https://internetcomputer.org/docs/current/motoko/main/motoko)
- [Motoko Language Quick Reference](https://internetcomputer.org/docs/current/motoko/main/language-manual)

## Running the project locally

If you want to test the project locally, you can use the following commands:
```bash
# Starts the replica, running in the background
dfx start --background
Running dfx start for version 0.28.0
Using the default configuration for the local shared network.
Replica API running in the background on 127.0.0.1:4943

# Deploys your canisters to the replica and generates your candid interface
dfx deploy
Deploying all canisters.
...
Deployed canisters.
URLs:
  Frontend canister via browser:
    multilingual_canister_frontend:
      - http://ulvla-h7777-77774-qaacq-cai.localhost:4943/ (Recommended)
      - http://127.0.0.1:4943/?canisterId=ulvla-h7777-77774-qaacq-cai (Legacy)
  Backend canister via Candid interface:
    multilingual_canister_motoko: http://127.0.0.1:4943/?canisterId=vizcg-th777-77774-qaaea-cai&id=ucwa4-rx777-77774-qaada-cai
    multilingual_canister_rust: http://127.0.0.1:4943/?canisterId=vizcg-th777-77774-qaaea-cai&id=ufxgi-4p777-77774-qaadq-cai
```

Once the job completes, your application will be available at `http://ulvla-h7777-77774-qaacq-cai.localhost:4943/`.

If you'd like to tear down all the services, you can run the following commands:
```bash
dfx canister delete --all
dfx stop
```
