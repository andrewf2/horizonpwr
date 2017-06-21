class CommissionService {

	public formatSales(sales){
		let formatted = [];
		let iterable = Object.keys(sales);
		iterable.forEach(key => formatted.push(sales[key]))
		return formatted;
	}

}

export const commissionService = new CommissionService();