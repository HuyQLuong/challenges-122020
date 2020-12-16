import { shallowEqual, useSelector } from "react-redux";

export default function Notification() {
    const notificationNumber = useSelector(
        (state: any) => state.feeds.notificationNumber,
        shallowEqual
    );
    return <div>{notificationNumber > 0 ? notificationNumber + "+" : ""}</div>;
}
