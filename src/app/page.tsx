import LeftDirectionIcon from "./assets/icons/LeftDIrectionIcon";
import StarsIcon from "./assets/icons/StarsIcon";
import XIcon from "./assets/icons/XIcon";
import Checkbox from "./Checkbox";
import DropDown from "./DropDown";
import Inputs from "./Inputs";
import LargeButton from "./LargeButtons";
import LargeTabs from "./LargeTabs";
import MeidumButtons from "./MediumButtons";
import Navigate from "./Navigate";
import NavigateRail from "./NavigateRail";
import SearchInput from "./Search";
import SmallTabs from "./SmallTabs";

export default function HomePage() {
  return (
    <div className="flex justify-center   pt-20 space-y-4 p-6">
      {/*<LargeButton variant="PrimarySmall">Text</LargeButton>
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
<MeidumButtons variant="Secondary"><LeftDirectionIcon/></MeidumButtons>
<MeidumButtons variant="TertiaryChose">  <XIcon />   </MeidumButtons> */}

      {/* 
      <Inputs variant="InputData" status="default" />
      <Inputs variant="InputFields" status="default" />
      <Inputs variant="InputText" status="default" label="Label" /> */}

      {/* <DropDown variant="DropDownLarge" status="default"></DropDown> 
 <DropDown variant="DropDownSmall" status="default"></DropDown> */}

      {/* <SearchInput variant="SearchInput" status="default"></SearchInput> */}

      {/* <Navigate variant="NavigationGroup"> </Navigate> */}

      {/* <NavigateRail variant="RailSingle">Verification</NavigateRail>
        <NavigateRail variant="RailGroup"> </NavigateRail>

       */}
      {/* <LargeTabs variant="TabsGroup" status="5th" > </LargeTabs> 
<LargeTabs variant="TabsSingle">Advisorr</LargeTabs>*/}

      {/* <SmallTabs variant="TabGroup" status="1st">  </SmallTabs>
      <SmallTabs variant="TabLine"> </SmallTabs> */}

      <Checkbox variant="CheckSolid" status="number">
        1
      </Checkbox>

      <Checkbox variant="CheckSolid" status="check"></Checkbox>

      <Checkbox variant="CheckSolid" status="empty">
        {" "}
      </Checkbox>

      <div className=""></div>
    </div>
  );
}
