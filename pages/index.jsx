import { useEvmNativeBalance } from "@moralisweb3/next";

function HomePage() {
  const address = "0xdf5508CD024c2a69131dD21e2517F42eD4281c0f";
  const { data: nativeBalance } = useEvmNativeBalance({ address });
  return (
    <div>
      <h3>Wallet: {address}</h3>
      <h3>Native Balance: {nativeBalance?.balance.ether} ETH</h3>
    </div>
  );
}

export default HomePage;
