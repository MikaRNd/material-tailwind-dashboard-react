import StatusCard from 'components/StatusCard';
import TableCard from 'components/TableCard';

export default function Dashboard() {
    return (
        <>
            <div className="bg-light-blue-500 pt-14 pb-28 px-9 h-auto">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4">
                        <StatusCard
                            color="red"
                            icon="far fa-chart-bar"
                            title="Traffic"
                            amount="350,897"
                            percentage="3.48"
                            percentageIcon="fas fa-arrow-up"
                            persentageColor="green"
                            date="Since last month"
                        />
                        <StatusCard
                            color="orange"
                            icon="fas fa-chart-pie"
                            title="New Users"
                            amount="2,356"
                            percentage="3.48"
                            percentageIcon="fas fa-arrow-down"
                            persentageColor="red"
                            date="Since last week"
                        />
                        <StatusCard
                            color="purple"
                            icon="fas fa-users"
                            title="Sales"
                            amount="924"
                            percentage="1.10"
                            percentageIcon="fas fa-arrow-down"
                            persentageColor="orange"
                            date="Since yesterday"
                        />
                        <StatusCard
                            color="teal"
                            icon="fas fa-percentage"
                            title="Performance"
                            amount="49,65%"
                            percentage="12"
                            percentageIcon="fas fa-arrow-up"
                            persentageColor="green"
                            date="Since last month"
                        />
                    </div>
                </div>
            </div>

            <div className="px-9 h-auto -mt-24">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 px-5">
                        <TableCard />
                    </div>
                </div>
            </div>
        </>
    );
}
