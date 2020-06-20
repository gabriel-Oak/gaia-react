import React, { useState } from 'react';
import { Box, Card, LinearProgress, CardContent, ExpansionPanel, ExpansionPanelSummary, Typography, ExpansionPanelDetails, Paper } from '@material-ui/core';
import WeekTabs from '../../../shared/components/WeekTabs/WeekTabs';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import useStyles from './styles';

interface Props {
  loading: boolean;
  menus: any[];
}

const ExchangesPage: React.FC<Props> = (props) => {
  const { loading, menus } = props;
  const [currentTab, setTab] = useState(0);
  const classes = useStyles();
  console.log(currentTab);

  return (
    <Box maxWidth="800px" margin="auto">
      <Card>
        {loading && <LinearProgress />}
        <WeekTabs index={currentTab} onChange={(setTab)}>
          {menus.map((menu: any, i: number) => (
            <CardContent key={menu.id}>
              <ExpansionPanel
                disabled={!menu.exchange1.exchanges.length}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Box flexBasis="33.33%">
                    <Typography>{menu.exchange1.name} {i === currentTab ? 'undefined' : 'false'}</Typography>
                  </Box>

                  <Typography>
                    {`${menu.exchange1.exchanges.length} Pedido${menu.exchange1.exchanges.length === 1 ? '' : 's'}`}
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>

                  {menu.exchange1.exchanges.map((exchange: any, index: number) => (
                    <Box className={classes.paper} key={index}>
                      {exchange.name}
                    </Box>
                  ))}

                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel
                disabled={!menu.exchange2.exchanges.length}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Box flexBasis="33.33%">
                    <Typography>{menu.exchange2.name}</Typography>
                  </Box>

                  <Typography>
                    {`${menu.exchange2.exchanges.length} Pedido${menu.exchange2.exchanges.length === 1 ? '' : 's'}`}
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>

                  {menu.exchange2.exchanges.map((exchange: any, index: number) => (
                    <Box className={classes.paper} key={index}>
                      {exchange.name}
                    </Box>
                  ))}

                </ExpansionPanelDetails>
              </ExpansionPanel>

              <ExpansionPanel
                disabled={!menu.out.exchanges.length}
              >
                <ExpansionPanelSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel3a-content"
                  id="panel3a-header"
                >
                  <Box flexBasis="33.33%">
                    <Typography>{menu.out.name}</Typography>
                  </Box>

                  <Typography>
                    {`${menu.out.exchanges.length} Pedido${menu.out.exchanges.length === 1 ? '' : 's'}`}
                  </Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails>

                  {menu.out.exchanges.map((exchange: any, index: number) => (
                    <Box className={classes.paper} key={index}>
                      {exchange.name}
                    </Box>
                  ))}


                </ExpansionPanelDetails>
              </ExpansionPanel>
            </CardContent>
          ))}
        </WeekTabs>
      </Card >
    </Box>
  );
}

export default ExchangesPage;