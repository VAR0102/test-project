import AdvanceFilter from "./assets/icons/AdvanceIcon";
import CursorRightIcon from "./assets/icons/CursorRightIcon";
import LeftDirectionIcon from "./assets/icons/LeftDIrectionIcon";
import MediumPlusIcon from "./assets/icons/MediumPlusIcon";
import PdfIcon from "./assets/icons/PdfIcon";
import PlusIcon from "./assets/icons/PlusIcon";
import SelectIcon from "./assets/icons/SelectIcon";
import StarsIcon from "./assets/icons/StarsIcon";
import XIcon from "./assets/icons/XIcon";
import Button from "./Components/shared/button";


export default function HomePage() {

// const groupItems = [
//   {
//     name:"New yourll",
//     city:[
//     "Verify your financial information",
//       "Name and SSN",
//       "Mobile number",
//       "Date of birth",
//       "Tax return address",
//       "Years to collect",
//     ]
//   },
 
//   "Gathering tax information",
//   "Authority documentation",
//   "Sign agreement",
//   "Confirm electronic signature",
//   "Request approval",
// ];
  return (
    <div>
      <div className="flex flex-col  pt-20 space-y-4 p-6">
         <Button  variant="primarySmall">Text</Button>
         <Button rightIcon={<CursorRightIcon/>}  variant="primaryBig">Button Text</Button>
         <Button leftIcon={<PlusIcon/>} variant="secondaryBig">Add new</Button>
         <Button  rightIcon={<CursorRightIcon/>} variant="secondaryMedium">Apply Filter</Button>
         <Button leftIcon="" variant="secondarySmall">Add Filter</Button>
         <Button variant="tertiary"> <StarsIcon /></Button> 
         <Button leftIcon={<MediumPlusIcon/>} variant="mediumAdd">Add new client</Button>
         <Button  rightIcon={<SelectIcon/>}  variant="mediumSelect">Last 30 daysr</Button>
         <Button  leftIcon={<AdvanceFilter/>} variant="mediumFilter">Advanced Filterr</Button>
         <Button  leftIcon={<PdfIcon/>}  variant="mediumPdf">Export PDF</Button>
         <Button  variant="mediumSecondary"> <LeftDirectionIcon/> </Button>
         <Button   rightIcon={<SelectIcon/>}  variant="mediumTertiarySelect">Group Sources</Button>
         <Button  variant="mediumTertiaryChose"><XIcon/></Button>
    </div>

      {/* 
<MeidumButtons variant="PrimaryAdd" >Add new client</MeidumButtons>
<MeidumButtons variant="PrimarySelect">Last 30 days</MeidumButtons>
<MeidumButtons variant="PrimaryFilter"> Advanced Filter</MeidumButtons> 
<MeidumButtons variant="PrimaryPdf">Export PDF</MeidumButtons>
<MeidumButtons variant="TertiarySelect">Group Sources</MeidumButtons>
<MeidumButtons variant="Secondary"><LeftDirectionIcon/></MeidumButtons>
<MeidumButtons variant="TertiaryChose">  <XIcon />   </MeidumButtons> */}

      {/* <div className="flex flex-col space-y-10 px-50 pt-50">
        <Input variant="fields" error="Erros" />
        <Input variant="text"  />
        <Input variant="date" /> 
      </div> */}
      {/* <Checkbox variant="solid" status="empty">1 </Checkbox>  */}
      {/* <div className=" flex flex-col space-y-10 pt-50 px-50 justify-center">
 <DropDown variant="DropDownSmall" status="default"></DropDown>
 </div> */}
    {/* <DropDown variant="small" status="default" />
    
    <DropDown variant="large" status="default"></DropDown>  */}




      {/* <SearchInput variant="SearchInput" status="default"></SearchInput>  */}
      {/* <div className="flex justify-center pt-50">
      <Navigate variant="NavigationSingle"></Navigate>
      </div> */}



          {/* <div className=" flex flex-col space-y-10 px-50 pt-50">
      <NavigateRail variant="single"  ><LargeButton startIcon={<Icon />} variant="PrimaryBig"  >Clcikc</LargeButton></NavigateRail>
  <NavigateRail variant="group"> </NavigateRail>
  </div>

        */}

     {/* <LargeTabs variant="group" status="1"  > </LargeTabs>
<LargeTabs variant="single" >Advisorr</LargeTabs>
 */}






      {/* <SmallTabs variant="group" status="1">  </SmallTabs> 
      
      <SmallTabs variant="line" > </SmallTabs> */}





      {/* 
      <Checkbox variant="CheckSolid" status="number"> 1</Checkbox>

      <Checkbox variant="CheckSolid" status="check"></Checkbox>

      <Checkbox variant="CheckSolid" status="empty"> </Checkbox>
      <Checkbox variant="CheckGroup" status="1st"> </Checkbox>
 */}

      {/* <RadioButtons variant="single">  </RadioButtons>
 <RadioButtons variant="group"> Text</RadioButtons> */}

      {/* <OtherComponent variant="Drop"></OtherComponent> */}
      {/* <OtherComponent variant="Toglle" status="on"></OtherComponent> */}
    </div>
  );
}
