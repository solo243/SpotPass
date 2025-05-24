import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Calendar, Users, Star, CreditCard, Check, X, Info } from 'lucide-react';

const SeatBookingProduct = () => {
  // State management
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [userInfo, setUserInfo] = useState({
    name: 'harhil',
    email: 'harshiasdl@gamil.com',
    phone: '232399898'
  });
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [isLoading, setIsLoading] = useState(false);

  // Mock data - replace with your API
  const eventData = {
    title: "Avengers: Endgame",
    venue: "PVR Cinemas, Phoenix Mall",
    date: "2024-05-25",
    time: "7:30 PM",
    duration: "3h 1m",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1489599856040-b6ae76851b18?w=400&h=600&fit=crop",
    genre: "Action, Adventure, Drama"
  };

  // Seat configuration
  const seatLayout = {
    sections: [
      {
        name: "Premium",
        price: 350,
        rows: ['A', 'B', 'C'],
        seatsPerRow: 12,
        color: "bg-purple-500"
      },
      {
        name: "Gold",
        price: 250,
        rows: ['D', 'E', 'F', 'G'],
        seatsPerRow: 14,
        color: "bg-yellow-500"
      },
      {
        name: "Silver",
        price: 180,
        rows: ['H', 'I', 'J', 'K'],
        seatsPerRow: 16,
        color: "bg-gray-400"
      }
    ]
  };

  // Generate seats
  const generateSeats = () => {
    const seats = [];
    seatLayout.sections.forEach(section => {
      section.rows.forEach(row => {
        for (let i = 1; i <= section.seatsPerRow; i++) {
          const seatId = `${row}${i}`;
          seats.push({
            id: seatId,
            row,
            number: i,
            section: section.name,
            price: section.price,
            status: Math.random() < 0.15 ? 'booked' : Math.random() < 0.05 ? 'blocked' : 'available',
            color: section.color
          });
        }
      });
    });
    return seats;
  };

  const [seats] = useState(generateSeats());

  // Seat selection handler
  const handleSeatClick = (seat) => {
    if (seat.status !== 'available') return;
    
    const isSelected = selectedSeats.find(s => s.id === seat.id);
    if (isSelected) {
      setSelectedSeats(prev => prev.filter(s => s.id !== seat.id));
    } else {
      if (selectedSeats.length < 6) { // Max 6 seats
        setSelectedSeats(prev => [...prev, seat]);
      }
    }
  };

  // Get seat display class
  const getSeatClass = (seat) => {
    const baseClass = "w-8 h-8 rounded-t-lg border-2 cursor-pointer transition-all duration-200 flex items-center justify-center text-xs font-semibold";
    const isSelected = selectedSeats.find(s => s.id === seat.id);
    
    if (isSelected) return `${baseClass} bg-green-500 border-green-600 text-white shadow-lg scale-110`;
    if (seat.status === 'booked') return `${baseClass} bg-red-500 border-red-600 text-white cursor-not-allowed opacity-50`;
    if (seat.status === 'blocked') return `${baseClass} bg-gray-800 border-gray-900 cursor-not-allowed opacity-30`;
    
    return `${baseClass} ${seat.color} border-gray-300 hover:border-gray-500 opacity-70 hover:opacity-100 hover:scale-105`;
  };

  // Calculate totals
  const getTotalPrice = () => selectedSeats.reduce((sum, seat) => sum + seat.price, 0);
  const getConvenienceFee = () => Math.floor(getTotalPrice() * 0.1);
  const getTaxes = () => Math.floor(getTotalPrice() * 0.18);
  const getFinalTotal = () => getTotalPrice() + getConvenienceFee() + getTaxes();

  // Step navigation
  const nextStep = () => {
    if (currentStep === 1 && selectedSeats.length === 0) return;
    if (currentStep === 2 && (!userInfo.name || !userInfo.email || !userInfo.phone)) return;
    
    if (currentStep < 4) setCurrentStep(prev => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(prev => prev - 1);
  };

  // Process booking
  const processBooking = async () => {
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsLoading(false);
    setCurrentStep(4);
  };

  // Step 1: Seat Selection
  const SeatSelectionStep = () => (
    <div className="space-y-6">
      {/* Event Info Header */}
      <div className="bg-gray-800 rounded-lg p-4 flex items-center space-x-4">
        <img 
          src={eventData.image} 
          alt={eventData.title}
          className="w-20 h-28 object-cover rounded-lg"
        />
        <div className="flex-1">
          <h2 className="text-xl font-bold text-white">{eventData.title}</h2>
          <div className="flex items-center space-x-4 text-gray-300 text-sm mt-2">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{eventData.venue}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-4 h-4" />
              <span>{eventData.date}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="w-4 h-4" />
              <span>{eventData.time}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 text-yellow-400" />
              <span>{eventData.rating}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Screen */}
      <div className="text-center">
        <div className="w-full max-w-4xl mx-auto mb-4">
          <div className="bg-gradient-to-r from-gray-700 via-gray-500 to-gray-700 h-3 rounded-full shadow-lg"></div>
          <p className="text-gray-400 text-sm mt-2">SCREEN</p>
        </div>
      </div>

      {/* Seating Layout */}
      <div className="space-y-4">
        {seatLayout.sections.map(section => (
          <div key={section.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-white">{section.name} - ₹{section.price}</h3>
            </div>
            <div className="space-y-2">
              {section.rows.map(row => {
                const rowSeats = seats.filter(seat => seat.row === row);
                return (
                  <div key={row} className="flex items-center justify-center space-x-1">
                    <div className="w-8 text-center text-gray-300 font-bold">{row}</div>
                    <div className="flex space-x-1">
                      {rowSeats.map(seat => (
                        <div
                          key={seat.id}
                          className={getSeatClass(seat)}
                          onClick={() => handleSeatClick(seat)}
                          title={`${seat.id} - ₹${seat.price}`}
                        >
                          {seat.number}
                        </div>
                      ))}
                    </div>
                    <div className="w-8 text-center text-gray-300 font-bold">{row}</div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Legend */}
      <div className="bg-gray-800 rounded-lg p-4">
        <h4 className="text-white font-semibold mb-3">Legend</h4>
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-green-500 rounded-t-lg"></div>
            <span className="text-gray-300 text-sm">Selected</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-purple-500 rounded-t-lg opacity-70"></div>
            <span className="text-gray-300 text-sm">Available</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-red-500 rounded-t-lg opacity-50"></div>
            <span className="text-gray-300 text-sm">Booked</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-800 rounded-t-lg"></div>
            <span className="text-gray-300 text-sm">Blocked</span>
          </div>
        </div>
      </div>
    </div>
  );

  // Step 2: User Information
  const UserInfoStep = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
      
      <div className="bg-gray-800 rounded-lg p-6 space-y-4">
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Full Name *</label>
          <input
            type="text"
            value={userInfo.name}
            onChange={(e) => setUserInfo(prev => ({ ...prev, name: e.target.value }))}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
            placeholder="Enter your full name"
          />
        </div>
        
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Email Address *</label>
          <input
            type="email"
            value={userInfo.email}
            onChange={(e) => setUserInfo(prev => ({ ...prev, email: e.target.value }))}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>
        
        <div>
          <label className="block text-gray-300 text-sm font-medium mb-2">Phone Number *</label>
          <input
            type="tel"
            value={userInfo.phone}
            onChange={(e) => setUserInfo(prev => ({ ...prev, phone: e.target.value }))}
            className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
            placeholder="Enter your phone number"
          />
        </div>
      </div>
    </div>
  );

  // Step 3: Payment
  const PaymentStep = () => (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold text-white mb-6">Payment</h3>
      
      <div className="bg-gray-800 rounded-lg p-6 space-y-6">
        {/* Payment Methods */}
        <div>
          <h4 className="text-white font-semibold mb-4">Select Payment Method</h4>
          <div className="space-y-3">
            {[
              { id: 'card', name: 'Credit/Debit Card', icon: CreditCard },
              { id: 'upi', name: 'UPI', icon: Users },
              { id: 'wallet', name: 'Digital Wallet', icon: CreditCard }
            ].map(method => (
              <label key={method.id} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="payment"
                  value={method.id}
                  checked={paymentMethod === method.id}
                  onChange={(e) => setPaymentMethod(e.target.value)}
                  className="text-blue-500"
                />
                <method.icon className="w-5 h-5 text-gray-300" />
                <span className="text-gray-300">{method.name}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Card Details (if card selected) */}
        {paymentMethod === 'card' && (
          <div className="space-y-4 pt-4 border-t border-gray-700">
            <div>
              <label className="block text-gray-300 text-sm font-medium mb-2">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-gray-300 text-sm font-medium mb-2">CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white focus:border-blue-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  // Step 4: Confirmation
  const ConfirmationStep = () => (
    <div className="text-center space-y-6">
      <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto">
        <Check className="w-10 h-10 text-white" />
      </div>
      <h3 className="text-2xl font-bold text-white">Booking Confirmed!</h3>
      <p className="text-gray-300">Your tickets have been booked successfully.</p>
      
      <div className="bg-gray-800 rounded-lg p-6 max-w-md mx-auto">
        <h4 className="text-white font-semibold mb-4">Booking Details</h4>
        <div className="space-y-2 text-sm">
          <div className="flex justify-between">
            <span className="text-gray-300">Booking ID:</span>
            <span className="text-white font-mono">BK{Date.now().toString().slice(-6)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Seats:</span>
            <span className="text-white">{selectedSeats.map(s => s.id).join(', ')}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-300">Total Amount:</span>
            <span className="text-white">₹{getFinalTotal()}</span>
          </div>
        </div>
      </div>
      
      <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg text-white font-semibold transition-colors">
        Download Tickets
      </button>
    </div>
  );

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-900 min-h-screen">
      {/* Progress Steps */}
      <div className="mb-8">
        <div className="flex items-center justify-center space-x-4">
          {['Select Seats', 'Contact Info', 'Payment', 'Confirmation'].map((step, index) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                currentStep > index + 1 ? 'bg-green-500 text-white' :
                currentStep === index + 1 ? 'bg-blue-500 text-white' :
                'bg-gray-700 text-gray-400'
              }`}>
                {currentStep > index + 1 ? <Check className="w-4 h-4" /> : index + 1}
              </div>
              <span className={`ml-2 text-sm ${
                currentStep >= index + 1 ? 'text-white' : 'text-gray-400'
              }`}>
                {step}
              </span>
              {index < 3 && <div className="w-8 h-0.5 bg-gray-700 mx-4"></div>}
            </div>
          ))}
        </div>
      </div>

      {/* Step Content */}
      <div className="mb-8">
        {currentStep === 1 && <SeatSelectionStep />}
        {currentStep === 2 && <UserInfoStep />}
        {currentStep === 3 && <PaymentStep />}
        {currentStep === 4 && <ConfirmationStep />}
      </div>

      {/* Selected Seats Summary (Steps 1-3) */}
      {currentStep < 4 && selectedSeats.length > 0 && (
        <div className="bg-gray-800 rounded-lg p-6 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div className="mb-4 lg:mb-0">
              <h4 className="text-white font-semibold mb-2">Selected Seats</h4>
              <div className="flex flex-wrap gap-2">
                {selectedSeats.map(seat => (
                  <span key={seat.id} className="bg-green-600 px-3 py-1 rounded-full text-sm text-white">
                    {seat.id} (₹{seat.price})
                  </span>
                ))}
              </div>
            </div>
            
            <div className="text-right">
              <div className="space-y-1 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-300">Subtotal:</span>
                  <span className="text-white">₹{getTotalPrice()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Convenience Fee:</span>
                  <span className="text-white">₹{getConvenienceFee()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-300">Taxes:</span>
                  <span className="text-white">₹{getTaxes()}</span>
                </div>
                <div className="flex justify-between font-bold text-lg pt-2 border-t border-gray-600">
                  <span className="text-white">Total:</span>
                  <span className="text-green-400">₹{getFinalTotal()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Navigation Buttons */}
      {currentStep < 4 && (
        <div className="flex justify-between">
          <button
            onClick={prevStep}
            disabled={currentStep === 1}
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-white font-semibold transition-colors"
          >
            Previous
          </button>
          
          <button
            onClick={currentStep === 3 ? processBooking : nextStep}
            disabled={
              (currentStep === 1 && selectedSeats.length === 0) ||
              (currentStep === 2 && (!userInfo.name || !userInfo.email || !userInfo.phone))
            }
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg text-white font-semibold transition-colors flex items-center space-x-2"
          >
            {isLoading && <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>}
            <span>
              {currentStep === 3 ? 'Complete Booking' : 'Continue'}
            </span>
          </button>
        </div>
      )}
    </div>
  );
};

export default SeatBookingProduct;