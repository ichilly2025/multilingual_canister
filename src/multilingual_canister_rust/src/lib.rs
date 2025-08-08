// Import necessary libraries for ID generation.
use ic_cdk::{api, init, update};

#[init]
fn init() {}

#[update]
async fn generate_id() -> String {
    // Use IC's management canister for true randomness
    match api::management_canister::main::raw_rand().await {
        Ok((random_bytes,)) => {
            // Convert random bytes to a UUID-like format
            let mut uuid_bytes = [0u8; 16];
            for (i, &byte) in random_bytes.iter().take(16).enumerate() {
                uuid_bytes[i] = byte;
            }
            
            // Format as UUID v4
            format!(
                "{:02x}{:02x}{:02x}{:02x}-{:02x}{:02x}-4{:01x}{:02x}-{:01x}{:02x}{:02x}-{:02x}{:02x}{:02x}{:02x}{:02x}",
                uuid_bytes[0], uuid_bytes[1], uuid_bytes[2], uuid_bytes[3],
                uuid_bytes[4], uuid_bytes[5],
                uuid_bytes[6] & 0x0f, uuid_bytes[7],
                (uuid_bytes[8] & 0x3f) | 0x80, uuid_bytes[9], uuid_bytes[10],
                uuid_bytes[11], uuid_bytes[12], uuid_bytes[13], uuid_bytes[14], uuid_bytes[15]
            )
        }
        Err(_) => {
            // Fallback to timestamp-based ID if randomness fails
            let timestamp = api::time();
            let caller = api::caller();
            format!("id-{}-{}", timestamp, caller.to_text().chars().take(8).collect::<String>())
        }
    }
}