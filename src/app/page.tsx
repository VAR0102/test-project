import LeftDirectionIcon from "./assets/icons/LeftDIrectionIcon";
import StarsIcon from "./assets/icons/StarsIcon";
import XIcon from "./assets/icons/XIcon";
import LargeButton from "./LargeButtons";
import MeidumButtons from "./MediumButtons";

export default function HomePage() {
  return (
    <div className="flex justify-center  pt-20 space-y-4 p-6">
      {/* <LargeButton variant="PrimarySmall">Text</LargeButton>
     <LargeButton variant="PrimaryBig">Button Text</LargeButton>
      <LargeButton variant="SecondaryBig">Add new</LargeButton>
        <LargeButton variant="SecondaryMedium">Apply Filter</LargeButton>
       <LargeButton variant="SecondarySmall">Add Filter</LargeButton>
       <LargeButton variant="Tertiary"> <StarsIcon /></LargeButton> */}

{/* 
 
 <MeidumButtons variant="PrimaryAdd" >Add new client</MeidumButtons>
<MeidumButtons variant="PrimarySelect">Last 30 days</MeidumButtons>
<MeidumButtons variant="PrimaryFilter"> Advanced Filter</MeidumButtons> 
<MeidumButtons variant="PrimaryPdf">Export PDF</MeidumButtons>
<MeidumButtons variant="TertiarySelect">Group Sources</MeidumButtons>
<MeidumButtons variant="Secondary"><LeftDirectionIcon/></MeidumButtons> */}
<MeidumButtons variant="TertiaryChose"><XIcon/></MeidumButtons>
<div className="">

</div>
    </div>
  );
}
