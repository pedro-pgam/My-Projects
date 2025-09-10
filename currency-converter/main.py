import requests

def convert_currency(amount, from_currency, to_currency):
    url = f"https://api.exchangerate.host/convert?from={from_currency}&to={to_currency}&amount={amount}"
    response = requests.get(url)
    data = response.json()
    return data['result']

if __name__ == "__main__":
    print("10 USD em EUR:", convert_currency(10, "USD", "EUR"))
