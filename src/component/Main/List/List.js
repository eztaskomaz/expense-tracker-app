import React from "react";
import { List as MUIList, ListItem, ListItemAvatar, Slide,
    ListItemSecondaryAction, Avatar, ListItemText, IconButton} from "@material-ui/core";
import { Delete, MoneyOff } from "@material-ui/icons";

import useStyles from './styles';

const List = () => {
    const classes = useStyles();
    const transactions = [
        { id: 1, type: "Income", category: "Salary", amount: 50, date: "Wed Dec 16" },
        { id: 2, type: "Expense", category: "Pets", amount: 50, date: "Wed Dec 17" },
        { id: 3, type: "Income", category: "Salary", amount: 150, date: "Wed Dec 18" }
        ];

    return (
        <MUIList dense={false} className={classes.list}>
            {transactions.map(transaction => (
                <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
                    <ListItem>
                        <ListItemAvatar>
                            <Avatar className={transaction.type === 'Income' ? classes.avatarIncome : classes.avatarExpense}>
                                <MoneyOff />
                            </Avatar>
                        </ListItemAvatar>
                        <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
                        <ListItemSecondaryAction>
                            <IconButton edge="end" aria-label="delete" onClick="">
                                <Delete />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Slide>
            ))}
        </MUIList>
    );
}

export default List;