const Services = {

	sendText: (text) => {
		return new Promise(async (resolve, reject) => {
			try {
		    	const requestOptions = {
			        method: 'POST',
			        headers: { 'Content-Type': 'application/json' },
			        body: JSON.stringify({ text: text })
			    };
			    fetch('http://localhost:3000/send-text', requestOptions)
			        .then(response => response.json())
			        .then(data => resolve(data));
			} catch (error) {
		      	reject(error);
		    }
		})
	}

}

export default Services;