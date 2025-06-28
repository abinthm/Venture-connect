from flask import Flask, request, jsonify
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/ai-improvement-suggestions', methods=['POST', 'OPTIONS'])
def ai_improvement_suggestions():
    if request.method == 'OPTIONS':
        # Handle preflight request
        response = jsonify({'status': 'ok'})
        response.headers.add('Access-Control-Allow-Origin', '*')
        response.headers.add('Access-Control-Allow-Headers', 'Content-Type')
        response.headers.add('Access-Control-Allow-Methods', 'POST')
        return response
    
    try:
        # Get the review data from the request
        review_data = request.get_json()
        
        # Log the received data
        print("Received review data:", json.dumps(review_data, indent=2))
        
        # Process the review data and generate suggestions
        suggestions = generate_ai_suggestions(review_data)
        
        return jsonify({
            'status': 'success',
            'suggestions': suggestions,
            'message': 'AI suggestions generated successfully'
        })
        
    except Exception as e:
        return jsonify({
            'status': 'error',
            'message': str(e)
        }), 500

def generate_ai_suggestions(review_data):
    """
    Generate AI-based improvement suggestions based on the review data
    """
    suggestions = []
    
    # Analyze the reviews and generate suggestions
    if review_data:
        # Count different types of feedback
        feedback_types = {}
        ratings = []
        
        for review in review_data:
            feedback_type = review.get('type', 'General')
            rating = review.get('rating', 0)
            
            if feedback_type not in feedback_types:
                feedback_types[feedback_type] = 0
            feedback_types[feedback_type] += 1
            ratings.append(rating)
        
        # Generate suggestions based on analysis
        avg_rating = sum(ratings) / len(ratings) if ratings else 0
        
        if avg_rating < 4:
            suggestions.append({
                'category': 'Overall Rating',
                'suggestion': 'Focus on improving overall presentation quality and addressing common feedback themes.',
                'priority': 'High',
                'impact': '85%'
            })
        
        if 'Financial Review' in feedback_types:
            suggestions.append({
                'category': 'Financial Projections',
                'suggestion': 'Add detailed financial breakdowns, scenario analysis, and unit economics.',
                'priority': 'High',
                'impact': '90%'
            })
        
        if 'Technical Review' in feedback_types:
            suggestions.append({
                'category': 'Technical Foundation',
                'suggestion': 'Strengthen technical validation with more detailed architecture and scalability plans.',
                'priority': 'Medium',
                'impact': '75%'
            })
        
        if 'Market Review' in feedback_types:
            suggestions.append({
                'category': 'Market Validation',
                'suggestion': 'Include more customer testimonials, usage metrics, and market penetration data.',
                'priority': 'High',
                'impact': '80%'
            })
        
        if 'Competitor Analysis' in feedback_types:
            suggestions.append({
                'category': 'Competitive Differentiation',
                'suggestion': 'Create a clear differentiation matrix and highlight unique value propositions.',
                'priority': 'High',
                'impact': '85%'
            })
    
    # Add some general suggestions
    suggestions.extend([
        {
            'category': 'Go-to-Market Strategy',
            'suggestion': 'Develop a comprehensive GTM strategy with clear customer acquisition channels.',
            'priority': 'Medium',
            'impact': '70%'
        },
        {
            'category': 'Team Presentation',
            'suggestion': 'Enhance team storytelling with founder backgrounds and key achievements.',
            'priority': 'Medium',
            'impact': '65%'
        }
    ])
    
    return suggestions

if __name__ == '__main__':
    app.run(debug=True, host='127.0.0.1', port=5000) 