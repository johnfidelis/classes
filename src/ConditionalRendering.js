export default function ConditionalRendering() {
    let isRaining = true
    return (
      <>
      {/* ternary Operator */}
        {
          isRaining ? <h1>Hey It's Raining, Stay Indoor</h1>
            : <h1>It's not Raining, Go chill with your Niggas Dude</h1>
        }
  
        {/* Short Circuit Approach */}
        {
          isRaining && <h1>Hey Man, I am cold</h1>
           
        }
      </>
    )
  }