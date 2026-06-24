
import { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  TextField,
  Button,
  IconButton,
  Paper,
  Grid,
  Divider,
  Chip,
  Collapse,
  Autocomplete,
  MenuItem,
} from '@mui/material';
import {
  AddCircleOutline,
  RemoveCircleOutline,
  ExpandMore as ExpandMoreIcon,
} from '@mui/icons-material';
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { KNOWN_FUNDS, CATEGORY_MAPPING, REGIONS } from '../../lib/funds';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const COLORS = ['#00ABE4', '#0FFCBE', '#d72828', '#009b3a', '#FFD700', '#7C4DFF'];

const CURRENCIES = ['SEK', 'EUR', 'USD', 'GBP', 'NOK', 'DKK', 'CHF', 'JPY', 'CAD', 'AUD'];

const getKnownFund = (fundName) => KNOWN_FUNDS[fundName.trim().toLowerCase()];

const normalizeDistribution = (distribution = {}) => REGIONS.reduce(
  (acc, region) => ({ ...acc, [region]: parseFloat(distribution[region]) || 0 }),
  {}
);

const getInitialDistribution = (fundName) => {
    const knownFund = getKnownFund(fundName);
    if (knownFund) {
        return normalizeDistribution(knownFund.distribution);
    }
    return normalizeDistribution();
};

const fundOptions = Object.values(KNOWN_FUNDS)
  .map((fund) => fund.name)
  .sort((first, second) => first.localeCompare(second));


export default function InvestmentCalculator() {
  const [currency, setCurrency] = useState('SEK');
  const [platforms, setPlatforms] = useState([
    {
      name: 'Avanza ISK',
      totalAmount: 2000,
      funds: [
        {
          name: 'Avanza Global',
          percentage: '50',
          fee: '0.10',
          distribution: getInitialDistribution('Avanza Global'),
          isDistributionExpanded: false,
        },
        {
          name: 'Avanza Emerging Markets',
          percentage: '50',
          fee: '0.30',
          distribution: getInitialDistribution('Avanza Emerging Markets'),
          isDistributionExpanded: false,
        },
      ],
    },
  ]);

  const [results, setResults] = useState({
    categoryDistribution: {},
    totalInvestment: 0,
    totalFee: 0,
    feePercentage: 0,
  });

  const handleAddPlatform = () => {
    setPlatforms([
      ...platforms,
      {
        name: '',
        totalAmount: 0,
        funds: [
          {
            name: '',
            percentage: '100',
            fee: '',
            distribution: getInitialDistribution(''),
            isDistributionExpanded: false,
          },
        ],
      },
    ]);
  };

  const handleRemovePlatform = (index) => {
    const newPlatforms = platforms.filter((_, i) => i !== index);
    setPlatforms(newPlatforms);
  };

  const handlePlatformChange = (index, field, value) => {
    const newPlatforms = [...platforms];
    newPlatforms[index][field] = value;
    setPlatforms(newPlatforms);
  };

  const handleAddFund = (platformIndex) => {
    const newPlatforms = [...platforms];
    newPlatforms[platformIndex].funds.push({
      name: '',
      percentage: '0',
      fee: '',
      distribution: getInitialDistribution(''),
      isDistributionExpanded: false,
    });
    setPlatforms(newPlatforms);
  };

  const handleRemoveFund = (platformIndex, fundIndex) => {
    const newPlatforms = [...platforms];
    newPlatforms[platformIndex].funds = newPlatforms[platformIndex].funds.filter(
      (_, i) => i !== fundIndex
    );
    setPlatforms(newPlatforms);
  };

  const handleFundChange = (platformIndex, fundIndex, field, value) => {
    const newPlatforms = [...platforms];
    const fund = newPlatforms[platformIndex].funds[fundIndex];
    fund[field] = value;

    setPlatforms(newPlatforms);
  };

  const handleKnownFundSelect = (platformIndex, fundIndex, fundName) => {
    const newPlatforms = [...platforms];
    const fund = newPlatforms[platformIndex].funds[fundIndex];
    const knownFund = getKnownFund(fundName || '');

    if (knownFund) {
      fund.name = knownFund.name;
      fund.fee = String(knownFund.fee.toFixed(2));
      fund.distribution = normalizeDistribution(knownFund.distribution);
    } else {
      fund.name = fundName || '';
      fund.distribution = getInitialDistribution(fundName || '');
    }

    setPlatforms(newPlatforms);
  };

  const handleDistributionChange = (platformIndex, fundIndex, region, value) => {
    const newPlatforms = [...platforms];
    newPlatforms[platformIndex].funds[fundIndex].distribution[region] = parseFloat(value) || 0;
    setPlatforms(newPlatforms);
  };

  const toggleDistribution = (platformIndex, fundIndex) => {
    const newPlatforms = [...platforms];
    newPlatforms[platformIndex].funds[fundIndex].isDistributionExpanded = !newPlatforms[platformIndex].funds[fundIndex].isDistributionExpanded;
    setPlatforms(newPlatforms);
  };

  useEffect(() => {
    calculateResults();
  }, [platforms]);

  const calculateResults = () => {
    let totalInvestment = 0;
    let totalFee = 0;
    const categoryDistribution = {};

    platforms.forEach((platform) => {
      const platformTotal = parseFloat(platform.totalAmount) || 0;
      totalInvestment += platformTotal;

      platform.funds.forEach((fund) => {
        const percentage = parseFloat(fund.percentage) || 0;
        const fundAmount = (platformTotal * percentage) / 100;
        const fee = parseFloat(fund.fee) || 0;
        totalFee += (fundAmount * fee) / 100;

        Object.entries(fund.distribution).forEach(([region, distPercentage]) => {
            const category = CATEGORY_MAPPING[region.toLowerCase()] || 'Other';
            const regionAmount = fundAmount * (distPercentage / 100);

            if (categoryDistribution[category]) {
                categoryDistribution[category] += regionAmount;
            } else {
                categoryDistribution[category] = regionAmount;
            }
        });
      });
    });

    const feePercentage = totalInvestment > 0 ? (totalFee / totalInvestment) * 100 : 0;

    setResults({
      categoryDistribution,
      totalInvestment,
      totalFee,
      feePercentage,
    });
  };

  const categoryChartData = Object.entries(results.categoryDistribution)
    .filter(([, amount]) => amount > 0)
    .map(([category, amount]) => ({
      name: category,
      value: amount,
    }));

  const formatAmount = (amount, options = {}) => `${amount.toLocaleString(undefined, options)} ${currency}`;

  return (
    <>
      <Navbar />
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4 }}>
        <Container maxWidth="lg">
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            align="center"
            color="primary.main"
            fontWeight="bold"
          >
            Investment Portfolio Planner
          </Typography>

      <Grid container spacing={4}>
        {/* Input Section */}
        <Grid item xs={12} md={7}>
          <TextField
            select
            label="Currency"
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
            size="small"
            sx={{ mb: 2, minWidth: 140 }}
          >
            {CURRENCIES.map((currencyOption) => (
              <MenuItem key={currencyOption} value={currencyOption}>
                {currencyOption}
              </MenuItem>
            ))}
          </TextField>
          <Typography variant="h5" gutterBottom color="primary.main" fontWeight={600}>
            Investment Platforms and Funds
          </Typography>
          {platforms.map((platform, pIndex) => {
            const totalPercentage = platform.funds.reduce(
              (sum, fund) => sum + (parseFloat(fund.percentage) || 0),
              0
            );
            const isInvalidPercentage = totalPercentage !== 100;

            return (
              <Paper
                key={pIndex}
                sx={{
                  p: 2,
                  mb: 2,
                  border: '1px solid',
                  borderColor: 'divider',
                  boxShadow: '0 3px 10px 0 rgba(0,92,191,0.08)',
                }}
                elevation={0}
              >
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <TextField
                    label="Platform Name"
                    value={platform.name}
                    onChange={(e) => handlePlatformChange(pIndex, 'name', e.target.value)}
                    variant="standard"
                    sx={{ flexGrow: 1 }}
                  />
                  <IconButton color="secondary" onClick={() => handleRemovePlatform(pIndex)} size="small">
                    <RemoveCircleOutline />
                  </IconButton>
                </Box>
                <TextField
                  label="Total Amount"
                  type="number"
                  value={platform.totalAmount}
                  onChange={(e) => handlePlatformChange(pIndex, 'totalAmount', e.target.value)}
                  fullWidth
                  margin="normal"
                />
                <Divider sx={{ my: 2 }}>
                    <Chip label={`Funds Total: ${totalPercentage.toFixed(2)}%`} color={isInvalidPercentage ? 'error' : 'default'} />
                </Divider>

                {platform.funds.map((fund, fIndex) => {
                  const distributionTotal = Object.values(fund.distribution).reduce((sum, value) => sum + (parseFloat(value) || 0), 0);
                  const isInvalidDistribution = distributionTotal !== 100;

                  return (
                  <Box key={fIndex} sx={{ mb: 2 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexWrap: { xs: 'wrap', sm: 'nowrap' },
                        gap: 1,
                        alignItems: 'center',
                      }}
                    >
                      <Autocomplete
                        freeSolo
                        fullWidth
                        options={fundOptions}
                        value={fund.name || ''}
                        inputValue={fund.name || ''}
                        onChange={(_, value) => handleKnownFundSelect(pIndex, fIndex, value || '')}
                        onInputChange={(_, value, reason) => {
                          if (reason !== 'reset') {
                            handleFundChange(pIndex, fIndex, 'name', value);
                          }
                        }}
                        sx={{ flex: { xs: '1 1 100%', sm: '0 0 50%' }, minWidth: 0 }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Fund Name"
                            size="small"
                            fullWidth
                            inputProps={{
                              ...params.inputProps,
                              style: { minWidth: 0 },
                            }}
                          />
                        )}
                      />
                      <TextField
                        label="Percentage"
                        value={fund.percentage}
                        onChange={(e) => handleFundChange(pIndex, fIndex, 'percentage', e.target.value)}
                        size="small"
                        error={isInvalidPercentage}
                        InputProps={{ endAdornment: '%' }}
                        sx={{ flex: { xs: '1 1 100px', sm: '1 1 0' }, minWidth: 90 }}
                      />
                      <TextField
                        label="Fee"
                        value={fund.fee}
                        onChange={(e) => handleFundChange(pIndex, fIndex, 'fee', e.target.value)}
                        size="small"
                        InputProps={{ endAdornment: '%' }}
                        sx={{ flex: { xs: '1 1 100px', sm: '1 1 0' }, minWidth: 90 }}
                      />
                      <Chip
                        label={formatAmount((parseFloat(platform.totalAmount) || 0) * (parseFloat(fund.percentage) || 0) / 100)}
                        variant="outlined"
                        sx={{ flex: { xs: '1 1 140px', sm: '1 1 0' }, minWidth: 110, height: 40 }}
                      />
                      <Box sx={{ flex: '0 0 auto', whiteSpace: 'nowrap' }}>
                        <IconButton color="primary" onClick={() => toggleDistribution(pIndex, fIndex)} size="small">
                          <ExpandMoreIcon
                            sx={{ transform: fund.isDistributionExpanded ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}
                          />
                        </IconButton>
                        <IconButton color="secondary" onClick={() => handleRemoveFund(pIndex, fIndex)} size="small">
                          <RemoveCircleOutline fontSize="small" />
                        </IconButton>
                      </Box>
                    </Box>
                    <Collapse in={fund.isDistributionExpanded}>
                        <Paper sx={{p: 2, mt: 1, bgcolor: 'grey.50'}} variant="outlined">
                          <Typography variant="caption" color="primary.main" fontWeight={600}>Regional Distribution</Typography>
                            <Grid container spacing={1} sx={{mt: 1}}>
                                {REGIONS.map(region => (
                                    <Grid item xs={6} sm={4} md={3} key={region}>
                                        <TextField
                                            label={region}
                                            value={fund.distribution[region] || '0'}
                                            onChange={(e) => handleDistributionChange(pIndex, fIndex, region, e.target.value)}
                                            size="small"
                                            type="number"
                                            error={isInvalidDistribution}
                                            InputProps={{ endAdornment: '%' }}
                                        />
                                    </Grid>
                                ))}
                            </Grid>
                            <Divider sx={{ my: 1 }}>
                                <Chip label={`Distribution Total: ${distributionTotal.toFixed(2)}%`} color={isInvalidDistribution ? 'error' : 'default'} size="small" />
                            </Divider>
                        </Paper>
                    </Collapse>
                  </Box>
                  );
                })}
                <Button
                  startIcon={<AddCircleOutline />}
                  onClick={() => handleAddFund(pIndex)}
                  size="small"
                  color="primary"
                  sx={{
                    '&:hover': {
                      backgroundColor: 'info.main',
                      color: 'primary.main',
                    },
                  }}
                >
                  Add Fund
                </Button>
              </Paper>
            );
          })}
          <Button
            variant="contained"
            startIcon={<AddCircleOutline />}
            onClick={handleAddPlatform}
            sx={{
              color: '#fff',
              '&:hover': {
                backgroundColor: 'info.main',
                color: 'primary.main',
              },
            }}
          >
            Add Platform
          </Button>
        </Grid>

        {/* Output Section */}
        <Grid item xs={12} md={5}>
          <Typography variant="h5" gutterBottom color="primary.main" fontWeight={600}>
            Portfolio Summary
          </Typography>
          <Paper
            sx={{
              p: 2,
              border: '1px solid',
              borderColor: 'divider',
              boxShadow: '0 3px 10px 0 rgba(0,92,191,0.08)',
            }}
            elevation={0}
          >
            <Typography variant="h6" color="primary.main">
              Total Investment: {formatAmount(results.totalInvestment)}
            </Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" color="primary.main">Distribution by Category</Typography>
            <Box sx={{ height: 300 }}>
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={categoryChartData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name.replace(/\\n/g, ' ')} ${(percent * 100).toFixed(0)}%`}
                  >
                    {categoryChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip formatter={(value) => formatAmount(value)} />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Box>
            <Box sx={{ mt: 2 }}>
              {categoryChartData.map(({ name: category, value: amount }) => (
                <Chip
                  key={category}
                  label={`${category.replace(/\\n/g, ' ')}: ${formatAmount(amount)} (${(
                    (amount / results.totalInvestment) *
                    100
                  ).toFixed(2)}%)`}
                  sx={{ m: 0.5 }}
                />
              ))}
            </Box>
            <Divider sx={{ my: 2 }} />
            <Typography variant="h6" color="primary.main">Fee Summary</Typography>
            <Typography>
              Total Yearly Fee: {formatAmount(results.totalFee, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </Typography>
            <Typography>
              Total Fee Percentage: {results.feePercentage.toFixed(4)}%
            </Typography>
          </Paper>
        </Grid>
      </Grid>
        </Container>
      </Box>
      <Footer />
    </>
  );
}
