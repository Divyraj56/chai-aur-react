
function Range (){
    return (
			<>
				<html lang="en">
					<head>
						<meta charset="UTF-8" />
						<meta
							name="viewport"
							content="width=device-width, initial-scale=1.0"
						/>
						<title>Document</title>
					</head>
					<body>
						<div className="slidecontainer">
							<input
								type="range"
								min="1"
								max="100"
								className="slider"
								id="myRange"
							/>
						</div>
					</body>
				</html>
				;
			</>
		);
}

export default Range;