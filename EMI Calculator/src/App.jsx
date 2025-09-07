import { Input } from "./component/input/input.jsx";
import { useState, useRef } from "react";

// Without Calculate button
export function App() {
  const loanAmountRef = useRef();
  const rateOfInterestRef = useRef();
  const loanTenureRef = useRef();

  const [EMI_Values, setEMI_Values] = useState({
    loanAmount: 100000,
    rateOfInterest: 1,
    loanTenure: 1,
  });

  const monthlyEmi = Math.trunc(
    (EMI_Values.loanAmount *
      EMI_Values.rateOfInterest *
      (1 + EMI_Values.rateOfInterest) ** EMI_Values.loanTenure) /
      ((1 + EMI_Values.rateOfInterest) ** EMI_Values.loanTenure - 1)
  );
  const totalInterest =
    Math.trunc(monthlyEmi) * EMI_Values.loanTenure - EMI_Values.loanAmount;

  const totalAmount = Math.trunc(monthlyEmi) * EMI_Values.loanTenure;

  function updateInput(property, value) {
    setEMI_Values({ ...EMI_Values, [property]: value });
  }

  return (
    <>
      <p className=" fw-bold display-6 text-center pt-2">EMI Calculator</p>
      <div className="container ">
        <div className="row pt-4 justify-content-center">
          <div
            className="col-sm-4 me-3 p-4 border border-end-0 border-2  rounded rounded-5 shadow"
            style={{ boxShadow: "-5px 5px 5px rgb(199, 198, 198) !important" }}
          >
            <Input
              loanAmountRef={loanAmountRef}
              rateOfInterestRef={rateOfInterestRef}
              loanTenureRef={loanTenureRef}
              onCalculate={() => {
                console.log(loanAmountRef.current.value);
              }}
            ></Input>

            {EMI_Values.loanAmount > 0 &&
              EMI_Values.loanTenure > 0 &&
              EMI_Values.rateOfInterest > 0 && (
                <div className="mt-4 border rounded shadow-lg p-3">
                  <div className=" d-flex justify-content-between ">
                    <h5>Monthly EMI</h5>
                    <p>₹{monthlyEmi}</p>
                  </div>
                  <div className=" d-flex justify-content-between ">
                    <h5>Principal Amount</h5>
                    <p>₹{EMI_Values.loanAmount}</p>
                  </div>
                  <div className=" d-flex justify-content-between ">
                    <h5>Total Interest</h5>
                    <p>₹{totalInterest}</p>
                  </div>
                  <div className=" d-flex justify-content-between ">
                    <h5>Total Amount</h5>
                    <p>₹{totalAmount}</p>
                  </div>
                </div>
              )}
          </div>
        </div>
      </div>
    </>
  );
}

// With Calculate button
// export function App() {
//     const [EMI_Values,setEMI_Values] = useState({
//         emi: undefined,
//         principalAmount: undefined,
//         totalAmount: undefined,
//         totalInterest: undefined
//     })

//     function EMICalculation(userInputs){
//         console.log("App.jsx me pass hua userInputs = ",userInputs);

//         let p = userInputs.loanAmount;
//         let r = userInputs.rateOfInterest/(12*100);
//         let n = userInputs.loanTenure*12;

//         setEMI_Values({
//             emi: Math.trunc( ( p*r*(1+r)**n )/( (1+r)**n - 1 ) ),
//             principalAmount: p,
//             totalAmount: Math.trunc( ( p*r*(1+r)**n )/( (1+r)**n - 1 ) ) * n,
//             totalInterest: (Math.trunc( ( p*r*(1+r)**n )/( (1+r)**n - 1 ) ) * n) - p
//         })
//     }

//   return (
//     <>
//       <p className=" fw-bold display-6 text-center pt-2">EMI Calculator</p>
//       <div className="container ">
//         <div className="row pt-4 justify-content-center">
//           <div
//             className="col-sm-4 me-3 p-4 border border-end-0 border-2  rounded rounded-5 shadow"
//             style={{ boxShadow: "-5px 5px 5px rgb(199, 198, 198) !important" }}
//           >
//             <Input EMICalculation={ EMICalculation } ></Input>

//             <div className="mt-4 border rounded shadow-lg p-3">
//                 <div className=" d-flex justify-content-between ">
//                     <h5>Monthly EMI</h5>
//                     <p>₹{EMI_Values.emi}</p>
//                 </div>
//                 <div className=" d-flex justify-content-between ">
//                     <h5>Principal Amount</h5>
//                     <p>₹{EMI_Values.principalAmount}</p>
//                 </div>
//                 <div className=" d-flex justify-content-between ">
//                     <h5>Total Interest</h5>
//                     <p>₹{EMI_Values.totalInterest}</p>
//                 </div>
//                 <div className=" d-flex justify-content-between ">
//                     <h5>Total Amount</h5>
//                     <p>₹{EMI_Values.totalAmount}</p>
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }
