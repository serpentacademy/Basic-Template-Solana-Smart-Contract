import * as web3 from "@solana/web3.js";
const connection = new web3.Connection(web3.clusterApiUrl("devnet"));

async function main(){
    const key: Uint8Array = Uint8Array.from(["Your private key"]);
    const signer: web3.Keypair = web3.Keypair.fromSecretKey(key);
    let programId: web3.PublicKey = new web3.PublicKey("GWbjvaroohxawqgvgedLBZSgQvmzYWi4qYSnZk6Ng219");
    let transaction = new web3.Transaction();
    transaction.add(
        new web3.TransactionInstruction({
            keys: [],
                programId,
            data: Buffer.alloc(0)        
            
        })
    );
    await web3
.sendAndConfirmTransaction(connection, transaction, [signer])
.then((sig)=> {
  console.log("sig: {}", sig);
});
}
main();