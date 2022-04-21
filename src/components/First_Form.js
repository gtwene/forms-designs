import React from "react";
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import SourceIcon from "@mui/icons-material/Source";
import GroupIcon from "@mui/icons-material/Group";
import GroupsIcon from "@mui/icons-material/Groups";
import GroupRemoveIcon from "@mui/icons-material/GroupRemove";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import CategoryIcon from "@mui/icons-material/Category";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import SegmentIcon from "@mui/icons-material/Segment";
import DashboardCustomizeIcon from "@mui/icons-material/DashboardCustomize";
import HouseboatIcon from "@mui/icons-material/Houseboat";
import BookmarkRemoveIcon from "@mui/icons-material/BookmarkRemove";
import AutofpsSelectIcon from "@mui/icons-material/AutofpsSelect";
import DateRangeIcon from "@mui/icons-material/DateRange";
import RequestQuoteIcon from "@mui/icons-material/RequestQuote";

const First_Form = () => {
  return (
    <div className=" m-20 p-5 border-2 border-slate-400 rounded-lg ">
      <Box sx={{ "& > :not(style)": { m: 1 } }} className="flex space-x-20">
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Customer ID"
            variant="standard"
            className="w-72"
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <SourceIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Source Branch"
            variant="standard"
            className="w-56"
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <GroupIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Account Name"
            variant="standard"
            className="w-80"
          />
        </Box>
      </Box>

      {/*  */}
      <Box sx={{ "& > :not(style)": { m: 1 } }} className="flex space-x-20">
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <GroupsIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Product Group"
            variant="standard"
            className="w-72"
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <GroupRemoveIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Product Sub Group"
            variant="standard"
            className="w-56"
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AdminPanelSettingsIcon
            sx={{ color: "action.active", mr: 1, my: 0.5 }}
          />
          <TextField
            id="input-with-sx"
            label="Account Mandate"
            variant="standard"
            className="w-80"
          />
        </Box>
      </Box>

      {/*  */}
      <Box sx={{ "& > :not(style)": { m: 1 } }} className="flex space-x-20">
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <CurrencyExchangeIcon
            sx={{ color: "action.active", mr: 1, my: 0.5 }}
          />
          <TextField
            id="input-with-sx"
            label="Currency"
            variant="standard"
            className="w-72"
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <DocumentScannerIcon
            sx={{ color: "action.active", mr: 1, my: 0.5 }}
          />
          <TextField
            id="input-with-sx"
            label="Scan Document"
            variant="standard"
            className="w-56"
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <CategoryIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Fx Category"
            variant="standard"
            className="w-80"
          />
        </Box>
      </Box>

      {/*  */}
      <Box sx={{ "& > :not(style)": { m: 1 } }} className="flex space-x-20">
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <EmojiPeopleIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Arm Officer"
            variant="standard"
            className="w-72"
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <SegmentIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Customer Segment"
            variant="standard"
            className="w-56"
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <DashboardCustomizeIcon
            sx={{ color: "action.active", mr: 1, my: 0.5 }}
          />
          <TextField
            id="input-with-sx"
            label="Customer Sub Segment"
            variant="standard"
            className="w-80"
          />
        </Box>
      </Box>

      {/*  */}
      <Box sx={{ "& > :not(style)": { m: 1 } }} className="flex space-x-20">
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <HouseboatIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Sector"
            variant="standard"
            className="w-72"
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <BookmarkRemoveIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Sub Sector"
            variant="standard"
            className="w-56"
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <AutofpsSelectIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Freq. Of Statement"
            variant="standard"
            className="w-80"
          />
        </Box>
      </Box>

      {/*  */}
      <Box sx={{ "& > :not(style)": { m: 1 } }} className="flex space-x-20">
        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <DateRangeIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Start Date"
            variant="standard"
            className="w-72"
          />
        </Box>

        <Box
          sx={{ display: "flex", alignItems: "flex-end" }}
          className="invisible"
        >
          <AccountCircle sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Source Branch"
            variant="standard"
            className="w-56"
          />
        </Box>

        <Box sx={{ display: "flex", alignItems: "flex-end" }}>
          <RequestQuoteIcon sx={{ color: "action.active", mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            label="Statement Required"
            variant="standard"
            className="w-80"
          />
        </Box>
      </Box>
    </div>
  );
};

export default First_Form;
